import { BookOpen, Calendar, FileText, MessageSquare, Bell, BarChart, Users, Laptop } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Course Management",
      description: "Access course materials, submit assignments, and track your progress all in one place.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Smart Scheduling",
      description: "Personalized class schedules with reminders for important deadlines and events.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Academic Records",
      description: "View your grades, transcripts, and academic progress in real-time.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Communication",
      description: "Connect with professors and classmates through integrated messaging.",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Notifications",
      description: "Stay updated with important announcements and campus news.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Performance Analytics",
      description: "Visualize your academic performance and identify areas for improvement.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Campus Community",
      description: "Discover and join student groups, events, and activities.",
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Mobile Access",
      description: "Access all features on any device with our responsive design.",
    },
  ]

  return (
    <section className="py-20 bg-muted/20" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-950">Comprehensive Platform Features</h2>
          <p className="text-lg text-muted-foreground dark:text-zinc-700">
            MyUni provides a complete suite of tools to enhance your university experience, from academic management to
            campus engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

