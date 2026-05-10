import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety & Privacy — dropd Help",
  description: "How to block and report users, protect your privacy, delete your account, and stay safe on dropd.",
};

export default function SafetyHelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
