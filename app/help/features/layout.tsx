import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features Guide — dropd Help",
  description: "Everything dropd can do — the 72-hour guarantee, exclusive content, tipping, reviews, notifications, and more.",
};

export default function FeaturesHelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
