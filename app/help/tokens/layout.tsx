import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tokens & Payments — dropd Help",
  description: "How to buy tokens, the 72-hour refund guarantee, payment security, and token packages on dropd.",
};

export default function TokensHelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
