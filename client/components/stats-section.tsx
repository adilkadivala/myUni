export function StatsSection() {
    const stats = [
      { value: "15,000+", label: "Students" },
      { value: "1,200+", label: "Courses" },
      { value: "95%", label: "Graduation Rate" },
      { value: "85%", label: "Employment Rate" },
    ]
  
    return (
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold">{stat.value}</p>
                <p className="text-lg text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  