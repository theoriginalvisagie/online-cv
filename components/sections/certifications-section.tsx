import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "AWS Cloud Practitioner (example)",
    issuer: "AWS",
    date: "2024",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-card-foreground">{cert.title}</h3>
                  <p className="text-accent text-sm">{cert.issuer}</p>
                </div>
                <Badge variant="outline" className="w-fit">
                  {cert.date}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
