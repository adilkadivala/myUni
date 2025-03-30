import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MyUni has completely transformed my university experience. The platform makes it so easy to keep track of my courses, assignments, and campus events all in one place.",
      name: "Maria Papadopoulou",
      role: "Computer Science Student",
      avatar: "MP",
    },
    {
      quote:
        "As a professor, I appreciate how MyUni streamlines communication with students and simplifies the process of sharing course materials and collecting assignments.",
      name: "Dr. Dimitrios Nikolaou",
      role: "Professor of Economics",
      avatar: "DN",
    },
    {
      quote:
        "The academic tracking features have been invaluable for monitoring my progress toward graduation. I can easily see which requirements I've met and what courses I still need to take.",
      name: "Andreas Georgiou",
      role: "Engineering Student",
      avatar: "AG",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from students and faculty about how MyUni has enhanced their
            university experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
