# Sign Arc Bee

A lightweight **Arc Testnet onboarding and wallet feedback interface** built for mobile-first Web3 use.

## Product focus

Sign Arc Bee makes the first Arc interaction easy to verify:

- connect an injected browser wallet
- switch/add Arc Testnet automatically
- read the real on-chain USDC balance
- copy the connected wallet address
- open official Arc docs, faucet, and explorer
- prepare a feedback bundle without pretending data was submitted to a backend

## Arc Testnet configuration

- Chain ID: `5042002`
- RPC: `https://rpc.testnet.arc.network`
- Explorer: `https://testnet.arcscan.app`
- Gas token: USDC
- USDC contract: `0x3600000000000000000000000000000000000000`

These values are kept aligned with the Arc developer documentation. Arc uses USDC as the native gas token and deterministic sub-second finality.

## Stack

- Next.js 16
- React 19
- JavaScript
- viem
- lightweight responsive CSS

The dependency set is intentionally small and pinned for more reproducible Vercel builds.

## Development

```bash
npm install
npm run dev
```

Next.js 16 requires Node.js `20.9+`.

## Security and product honesty

This frontend never asks for seed phrases or private keys. Wallet connection is handled by the user's injected wallet provider. No fake wallet address, fake token balance, or fake allocation confirmation is used.

Feedback preparation is local to the browser. The current product does not claim to transmit or store feedback on a server.

## Builder

**AMRISH KUMAR DWIVEDI** — Web3 Developer & Arc Network Builder.

[GitHub](https://github.com/AMRISHKUMARDWIVEDI08) · [Repository](https://github.com/AMRISHKUMARDWIVEDI08/sign-arc-bee)
