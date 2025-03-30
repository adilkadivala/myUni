import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-card border rounded-xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground">
              Apply now to become part of our diverse and innovative university community. Start your journey toward
              academic excellence and career success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link href="#">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

