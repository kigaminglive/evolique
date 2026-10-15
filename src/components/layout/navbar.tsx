import Link from "next/link";
import Button from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Evolique
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/learning-paths"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Learning Paths
          </Link>
          <Link
            href="/about"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}