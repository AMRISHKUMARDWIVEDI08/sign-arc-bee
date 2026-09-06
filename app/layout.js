import "./globals.css";

export const metadata = {
  title: "Sign Arc Bee | Arc Testnet",
  description: "A mobile-first Arc Testnet onboarding and wallet feedback experience.",
  applicationName: "Sign Arc Bee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
