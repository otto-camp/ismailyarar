import { Navigation } from "./nav";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 text-zinc-200">
      <Navigation />
      <div className="pt-24">{children}</div>
    </div>
  );
}
