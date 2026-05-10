import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Hosts — dropd Help",
  description: "How to become a host, set your token price, reply to fans, and cash out your earnings on dropd.",
};

export default function HostsHelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
