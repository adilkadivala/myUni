"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1 text-primary-foreground">
              <span className="text-xl font-bold">M</span>
            </div>
            <span className="text-xl font-bold">MyUni</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => toggleDropdown("about")}
            >
              About{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  activeDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "about" && (
              <div className="absolute top-full mt-2 w-48 rounded-md bg-background shadow-lg border p-2">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                >
                  Universities
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                >
                  History
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                >
                  Campus Life
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => toggleDropdown("academics")}
            >
              Academics{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  activeDropdown === "academics" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "academics" && (
              <div className="absolute top-full mt-2 w-48 rounded-md bg-background shadow-lg border p-2">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                >
                  Programs
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                >
                  Departments
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-muted rounded-md"
                >
                  Research
                </Link>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Admissions
          </Link>
          <Link
            href="#"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            News
          </Link>
          <Link
            href="#"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/login">Student Portal</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <div className="border-b pb-2">
              <button
                className="flex items-center justify-between w-full py-2"
                onClick={() => toggleDropdown("mobile-about")}
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobile-about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-about" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="#" className="block py-1">
                    Universities
                  </Link>
                  <Link href="#" className="block py-1">
                    History
                  </Link>
                  <Link href="#" className="block py-1">
                    Campus Life
                  </Link>
                </div>
              )}
            </div>
            <div className="border-b pb-2">
              <button
                className="flex items-center justify-between w-full py-2"
                onClick={() => toggleDropdown("mobile-academics")}
              >
                <span>Academics</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobile-academics" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-academics" && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="#" className="block py-1">
                    Programs
                  </Link>
                  <Link href="#" className="block py-1">
                    Departments
                  </Link>
                  <Link href="#" className="block py-1">
                    Research
                  </Link>
                </div>
              )}
            </div>
            <div className="border-b pb-2">
              <Link href="#" className="block py-2">
                Admissions
              </Link>
            </div>
            <div className="border-b pb-2">
              <Link href="#" className="block py-2">
                News
              </Link>
            </div>
            <div className="border-b pb-2">
              <Link href="#" className="block py-2">
                Contact
              </Link>
            </div>
            <Button asChild className="w-full">
              <Link href="/login">Dashboard</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
