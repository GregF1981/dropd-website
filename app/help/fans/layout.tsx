import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sending Messages — dropd Help",
  description: "How to find hosts, send messages, earn refunds, and get real replies on dropd.",
};

export default function FansHelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
