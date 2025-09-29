import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    title: "Commercial Pilot Studies",
    org: "Flight Training College, George",
    date: "2017 - 2019",
    details: "Focused on advanced aviation theory and flight training toward a Commercial Pilot License (CPL).",
  },
  {
    title: "Private Pilot License",
    org: "Foster Aero, Lanseria",
    date: "2011 - 2013",
    details: "Completed flight training and ground school, earning a Private Pilot License (PPL).",
  },
  {
    title: "High School Diploma",
    org: "Hoërskool Randburg, Johannesburg",
    date: "2010 - 2014",
    details: "Subjects: Information Technology, Mathematics, AP Mathematics, Science & Chemistry, Geography, English, Afrikaans, Life Orientation.",
  },
  // {
  //   title: "Commercial Pilot Studies (in progress)",
  //   org: "SACAA Exams",
  //   date: "2025",
  //   details: "Subjects: Human Performance, Air Law, Meteorology, Navigation, Flight Performance & Planning, Aircraft Technical & General, Principles of Flight.",
  // },
]

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">{edu.title}</h3>
                  <p className="text-accent font-medium">{edu.org}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                </div>
                <div className="text-sm text-muted-foreground font-mono">{edu.date}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
