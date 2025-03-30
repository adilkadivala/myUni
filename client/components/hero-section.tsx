import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/5 dark:to-transparent"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-primary">MyUni</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering students with a modern, integrated university experience. Access courses, resources, and campus
              services all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/login">Student Login</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#explore">Explore Programs</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-card rounded-lg shadow-lg flex items-center justify-center p-4">
                  <div className="space-y-4 w-full">
                    <div className="h-8 w-24 bg-primary/20 rounded-md mx-auto"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 bg-primary/10 rounded-md"></div>
                      <div className="h-20 bg-primary/10 rounded-md"></div>
                      <div className="h-20 bg-primary/10 rounded-md"></div>
                      <div className="h-20 bg-primary/10 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

