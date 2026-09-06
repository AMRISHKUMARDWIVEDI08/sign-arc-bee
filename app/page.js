"use client";

import { useEffect, useState } from "react";
import { createPublicClient, defineChain, formatUnits, getAddress, http } from "viem";

const ARC_CHAIN_ID = 5042002;
const ARC_CHAIN_HEX = "0x4cef52";
const ARC_RPC = "https://rpc.testnet.arc.network";
const ARC_EXPLORER = "https://testnet.arcscan.app";
const ARC_FAUCET = "https://faucet.circle.com";
const ARC_DOCS = "https://docs.arc.io";
const USDC_ADDRESS = "0x3600000000000000000000000000000000000000";

const arcTestnet = defineChain({
  id: ARC_CHAIN_ID,
  name: "Arc Testnet",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 6 },
  rpcUrls: { default: { http: [ARC_RPC] } },
  blockExplorers: { default: { name: "Arcscan", url: ARC_EXPLORER } },
});

const client = createPublicClient({ chain: arcTestnet, transport: http() });
const usdcAbi = [{ type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ name: "account", type: "address" }], outputs: [{ name: "balance", type: "uint256" }] }];

const shortAddress = (value) => (value ? `${value.slice(0, 6)}…${value.slice(-4)}` : "Not connected");
const provider = () => (typeof window === "undefined" ? null : window.ethereum || null);

export default function Home() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [chainId, setChainId] = useState("");
  const [status, setStatus] = useState("Ready for Arc Testnet");
  const [busy, setBusy] = useState(false);
  const [copyState, setCopyState] = useState("");
  const [discord, setDiscord] = useState("");
  const [xUser, setXUser] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");

  const refresh = async (walletProvider, walletAddress) => {
    if (!walletProvider || !walletAddress) return;
    try {
      const current = String(await walletProvider.request({ method: "eth_chainId" })).toLowerCase();
      setChainId(current);
      const raw = await client.readContract({ address: USDC_ADDRESS, abi: usdcAbi, functionName: "balanceOf", args: [getAddress(walletAddress)] });
      setBalance(formatUnits(raw, 6));
    } catch (error) {
      setBalance(null);
      setStatus(error?.shortMessage || "Could not read the Arc USDC balance.");
    }
  };

  const connect = async () => {
    const wallet = provider();
    if (!wallet) {
      setStatus("No browser wallet detected. Open this page in a wallet browser or install a wallet.");
      return;
    }
    setBusy(true);
    setStatus("Connecting wallet…");
    try {
      let current = String(await wallet.request({ method: "eth_chainId" })).toLowerCase();
      if (current !== ARC_CHAIN_HEX) {
        setStatus("Switching to Arc Testnet…");
        try {
          await wallet.request({ method: "wallet_switchEthereumChain", params: [{ chainId: ARC_CHAIN_HEX }] });
        } catch (error) {
          if (error?.code !== 4902) throw error;
          await wallet.request({ method: "wallet_addEthereumChain", params: [{ chainId: ARC_CHAIN_HEX, chainName: "Arc Testnet", nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 6 }, rpcUrls: [ARC_RPC], blockExplorerUrls: [ARC_EXPLORER] }] });
        }
      }
      const accounts = await wallet.request({ method: "eth_requestAccounts" });
      if (!accounts?.[0]) throw new Error("Wallet returned no account.");
      const next = getAddress(accounts[0]);
      setAddress(next);
      setStatus("Connected to Arc Testnet.");
      await refresh(wallet, next);
    } catch (error) {
      setStatus(error?.shortMessage || error?.message || "Wallet connection was cancelled.");
    } finally {
      setBusy(false);
    }
  };

  const copyAddress = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopyState("Copied");
      window.setTimeout(() => setCopyState(""), 1600);
    } catch {
      setCopyState("Copy failed");
    }
  };

  const prepareFeedback = async (event) => {
    event.preventDefault();
    if (!discord.trim() || !xUser.trim() || !feedback.trim()) {
      setFeedbackStatus("Please complete all three fields.");
      return;
    }
    const text = ["Sign Arc Bee — onboarding feedback", `wallet: ${address || "not connected"}`, `discord: ${discord.trim()}`, `x: ${xUser.trim()}`, `feedback: ${feedback.trim()}`].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setFeedbackStatus("Feedback bundle copied. Nothing was sent to a server.");
    } catch {
      setFeedbackStatus("Feedback is ready, but clipboard access was blocked.");
    }
  };

  useEffect(() => {
    const wallet = provider();
    if (!wallet) return undefined;
    const accountsChanged = async (accounts) => {
      if (!accounts?.[0]) {
        setAddress(""); setBalance(null); setStatus("Wallet disconnected."); return;
      }
      const next = getAddress(accounts[0]);
      setAddress(next); await refresh(wallet, next);
    };
    const chainChanged = async (next) => {
      setChainId(String(next).toLowerCase());
      if (address) await refresh(wallet, address);
      setStatus(String(next).toLowerCase() === ARC_CHAIN_HEX ? "Arc Testnet selected." : "Please switch back to Arc Testnet.");
    };
    wallet.on?.("accountsChanged", accountsChanged);
    wallet.on?.("chainChanged", chainChanged);
    return () => {
      wallet.removeListener?.("accountsChanged", accountsChanged);
      wallet.removeListener?.("chainChanged", chainChanged);
    };
  }, [address]);

  const isArc = chainId === ARC_CHAIN_HEX;

  return (
    <main className="page-shell">
      <div className="backdrop" aria-hidden="true" />
      <div className="container">
        <header className="topbar">
          <a className="brand" href="/" aria-label="Sign Arc Bee home">
            <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64"><defs><linearGradient id="arc-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7c3aed"/><stop offset="100%" stopColor="#e879f9"/></linearGradient></defs><path d="M32 7C19 7 12 22 12 47c8-8 14-13 20-13s12 5 20 13C52 22 45 7 32 7Z" fill="url(#arc-gradient)"/><path d="M20 30h24" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".92"/></svg></span>
            <span><strong>sign arc bee</strong><small>arc testnet onboarding</small></span>
          </a>
          <span className="network-pill">ARC TESTNET</span>
        </header>

        <section className="hero">
          <div>
            <span className="eyebrow">builder-first wallet onboarding</span>
            <h1>connect, verify, and start building on arc.</h1>
            <p>A lightweight onboarding surface for Arc Testnet. Connect a browser wallet, verify the network, and inspect the real USDC balance.</p>
          </div>
          <nav className="hero-links" aria-label="Arc resources"><a href={ARC_DOCS} target="_blank" rel="noreferrer">docs</a><a href={ARC_FAUCET} target="_blank" rel="noreferrer">faucet</a><a href={ARC_EXPLORER} target="_blank" rel="noreferrer">explorer</a></nav>
        </section>

        <section className="grid">
          <article className="card wallet-card">
            <div className="card-heading"><div><span className="section-kicker">01 · wallet</span><h2>Arc wallet check</h2></div><span className={isArc ? "state good" : "state"}>{isArc ? "ready" : "not verified"}</span></div>
            <div className="metric"><span>USDC balance</span><strong>{balance === null ? "—" : balance}</strong></div>
            <div className="address-row"><div><span className="muted-label">wallet address</span><code>{shortAddress(address)}</code></div><button className="mini-button" type="button" onClick={copyAddress} disabled={!address}>{copyState || "copy"}</button></div>
            <div className="status" aria-live="polite"><span className={isArc ? "status-dot good-dot" : "status-dot"}/><span>{status}</span></div>
            <button className="primary-button" type="button" onClick={connect} disabled={busy}>{busy ? "connecting…" : address && isArc ? "refresh Arc wallet" : "connect wallet"}</button>
            <p className="fine-print">No seed phrase or private key is requested or stored by this app.</p>
          </article>

          <article className="card network-card">
            <div className="card-heading"><div><span className="section-kicker">02 · network</span><h2>Arc Testnet</h2></div><span className="state good">live</span></div>
            <div className="network-list"><div><span>chain id</span><strong>{ARC_CHAIN_ID}</strong></div><div><span>gas token</span><strong>USDC</strong></div><div><span>USDC contract</span><code>0x3600…0000</code></div><div><span>rpc</span><code>rpc.testnet.arc.network</code></div></div>
            <div className="network-note">Arc uses USDC for gas and deterministic sub-second finality. This app treats the wallet balance as real on-chain USDC, not a demo token.</div>
          </article>
        </section>

        <section className="card feedback-card">
          <div className="feedback-copy"><span className="section-kicker">03 · feedback</span><h2>help tighten the onboarding.</h2><p>Prepare a clean feedback bundle for your Arc community submission. It is copied locally; this page does not pretend to transmit it anywhere.</p></div>
          <form onSubmit={prepareFeedback} className="feedback-form">
            <div className="field-row"><label><span>discord username</span><input value={discord} onChange={(e) => setDiscord(e.target.value)} placeholder="your discord" maxLength={80}/></label><label><span>x handle</span><input value={xUser} onChange={(e) => setXUser(e.target.value)} placeholder="@yourhandle" maxLength={80}/></label></div>
            <label><span>what should improve?</span><textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Tell us what felt smooth, confusing, or missing…" rows={4} maxLength={700}/></label>
            <button className="secondary-button" type="submit">copy feedback bundle</button>
            <p className="form-status" aria-live="polite">{feedbackStatus}</p>
          </form>
        </section>

        <footer className="footer"><span>sign arc bee · built for Arc Testnet</span><span>usdc-native gas · no fake allocation claims</span></footer>
      </div>
      <style>{`
        .page-shell{min-height:100dvh;position:relative;overflow-x:hidden}.backdrop{position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 15% 10%,rgba(124,58,237,.20),transparent 28%),radial-gradient(circle at 90% 55%,rgba(232,121,249,.10),transparent 30%)}.container{width:min(1040px,calc(100% - 28px));margin:0 auto;padding:20px 0 28px;position:relative}.topbar{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:40px}.brand{display:inline-flex;align-items:center;gap:11px;text-decoration:none}.brand-mark{width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.04)}.brand-mark svg{width:27px;height:27px}.brand strong{display:block;font-size:18px;letter-spacing:-.03em}.brand small{display:block;margin-top:2px;color:#9696a6;font-size:11px}.network-pill{border:1px solid rgba(216,180,254,.28);background:rgba(124,58,237,.10);color:#ddd6fe;border-radius:999px;padding:8px 11px;font-size:10px;font-weight:800;letter-spacing:.12em}.hero{display:grid;grid-template-columns:1fr auto;align-items:end;gap:30px;padding-bottom:34px}.eyebrow,.section-kicker{color:#c4b5fd;font-size:10px;text-transform:uppercase;letter-spacing:.14em;font-weight:800}h1,h2,p{margin:0}.hero h1{margin-top:11px;max-width:720px;font-size:clamp(36px,7vw,72px);line-height:.96;letter-spacing:-.055em}.hero p{max-width:650px;margin-top:18px;color:#a6a6b4;font-size:15px;line-height:1.7}.hero-links{display:flex;gap:16px;padding-bottom:4px;flex-wrap:wrap;justify-content:flex-end}.hero-links a{color:#d4d4dc;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.20);padding-bottom:3px;font-size:12px}.grid{display:grid;grid-template-columns:1.08fr .92fr;gap:16px}.card{border:1px solid rgba(255,255,255,.10);background:linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.025));border-radius:22px;box-shadow:0 22px 70px rgba(0,0,0,.25);backdrop-filter:blur(16px)}.wallet-card,.network-card,.feedback-card{padding:22px}.card-heading{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}.card h2{margin-top:7px;font-size:21px;letter-spacing:-.035em}.state{color:#aaaab5;border:1px solid rgba(255,255,255,.11);background:rgba(255,255,255,.035);border-radius:999px;padding:6px 9px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.09em}.state.good{color:#c4b5fd;border-color:rgba(196,181,253,.25);background:rgba(124,58,237,.10)}.metric{margin:28px 0 17px}.metric span,.muted-label,.network-list span,.field-row label>span,.feedback-form label>span{display:block;color:#8f8f9f;font-size:11px}.metric strong{display:block;margin-top:3px;font-size:43px;line-height:1;letter-spacing:-.05em}.address-row{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:12px;border:1px solid rgba(255,255,255,.08);border-radius:14px;background:rgba(0,0,0,.16)}.address-row code{display:block;margin-top:4px;font-size:13px;color:#ececf4}.mini-button,.secondary-button{color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);cursor:pointer}.mini-button{border-radius:9px;padding:8px 10px;font-size:11px;font-weight:700}.mini-button:disabled{cursor:not-allowed;opacity:.4}.status{display:flex;gap:9px;align-items:flex-start;margin:14px 0;color:#acacb8;font-size:12px;line-height:1.45;min-height:35px}.status-dot{width:8px;height:8px;flex:0 0 auto;border-radius:50%;background:#81818b;margin-top:4px}.good-dot{background:#a78bfa;box-shadow:0 0 0 4px rgba(167,139,250,.10)}.primary-button{width:100%;border:0;border-radius:12px;padding:14px;cursor:pointer;color:#0b0b0f;background:linear-gradient(100deg,#ddd6fe,#f0abfc);font-weight:900;letter-spacing:-.01em}.primary-button:disabled{opacity:.55;cursor:wait}.fine-print{margin-top:10px;color:#797985;font-size:10px;text-align:center}.network-list{margin-top:26px;border-top:1px solid rgba(255,255,255,.08)}.network-list div{display:flex;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.07);align-items:center}.network-list strong,.network-list code{color:#eeeef5;font-size:12px;font-weight:700;text-align:right}.network-list code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;max-width:60%;overflow-wrap:anywhere}.network-note{margin-top:16px;padding:12px 13px;border-radius:13px;background:rgba(124,58,237,.08);color:#aaa3bd;font-size:11px;line-height:1.6}.feedback-card{margin-top:16px;display:grid;grid-template-columns:.8fr 1.2fr;gap:28px}.feedback-copy h2{font-size:29px;line-height:1.02;max-width:320px}.feedback-copy p{margin-top:12px;color:#9999a8;font-size:12px;line-height:1.7;max-width:380px}.feedback-form{display:grid;gap:12px}.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.feedback-form label{display:grid;gap:7px}.feedback-form input,.feedback-form textarea{width:100%;border:1px solid rgba(255,255,255,.10);border-radius:12px;background:rgba(0,0,0,.18);color:#f4f4f8;outline:none;padding:12px 13px;resize:vertical}.feedback-form input:focus,.feedback-form textarea:focus{border-color:rgba(196,181,253,.55);box-shadow:0 0 0 3px rgba(124,58,237,.10)}.feedback-form input::placeholder,.feedback-form textarea::placeholder{color:#64646f}.secondary-button{border-radius:11px;padding:12px;font-weight:800;font-size:12px}.form-status{color:#c4b5fd;font-size:11px;min-height:17px}.footer{display:flex;justify-content:space-between;gap:18px;padding:17px 2px 0;color:#696975;font-size:10px;text-transform:uppercase;letter-spacing:.07em}@media(max-width:760px){.container{width:min(100% - 20px,640px);padding-top:13px}.topbar{margin-bottom:30px}.hero{grid-template-columns:1fr;gap:18px;padding-bottom:24px}.hero-links{justify-content:flex-start}.grid,.feedback-card{grid-template-columns:1fr}.wallet-card,.network-card,.feedback-card{padding:18px}.feedback-copy h2{max-width:none}.footer{flex-direction:column}}@media(max-width:480px){.brand strong{font-size:16px}.brand small{font-size:10px}.network-pill{padding:7px 9px;font-size:9px}.hero h1{font-size:42px}.field-row{grid-template-columns:1fr}.network-list div{align-items:flex-start}.network-list strong,.network-list code{max-width:58%}}
      `}</style>
    </main>
  );
}
