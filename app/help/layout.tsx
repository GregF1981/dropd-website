import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Centre — dropd",
  description: "Get help with dropd — sending messages, buying tokens, hosting, safety, and more.",
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
