import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ProgramsSection() {
  const programs = [
    {
      title: "Computer Science",
      description: "Develop expertise in algorithms, software development, artificial intelligence, and data science.",
      level: "Undergraduate",
      duration: "4 years",
      credits: 240,
      featured: true,
    },
    {
      title: "Business Administration",
      description: "Gain knowledge in management, marketing, finance, and entrepreneurship for business leadership.",
      level: "Undergraduate",
      duration: "4 years",
      credits: 240,
      featured: false,
    },
    {
      title: "Data Science & Analytics",
      description: "Master the skills to analyze complex data and derive meaningful insights for decision-making.",
      level: "Graduate",
      duration: "2 years",
      credits: 120,
      featured: true,
    },
    {
      title: "Digital Marketing",
      description: "Learn cutting-edge strategies for online marketing, social media, and digital brand management.",
      level: "Graduate",
      duration: "1.5 years",
      credits: 90,
      featured: false,
    },
  ]

  return (
    <section className="py-20" id="explore">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
          <p className="text-lg text-muted-foreground">
            Discover our diverse range of undergraduate and graduate programs designed to prepare you for success in
            your chosen field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className={program.featured ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{program.title}</CardTitle>
                  {program.featured && <Badge variant="default">Popular</Badge>}
                </div>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Level</span>
                    <span className="font-medium">{program.level}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <span className="text-muted-foreground">Credits</span>
                    <span className="font-medium">{program.credits} ECTS</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="#">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

