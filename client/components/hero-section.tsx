import { Button } from "@/components/ui/button";
import { ArrowRight, Badge } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-4">🎓 University Management System</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Welcome to MyUni
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The most comprehensive university management platform designed for the
          future of education. Streamline academics, enhance collaboration, and
          empower your educational journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sign In to Continue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
