import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BookOpen } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">MyUni</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Link href="/auth/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
