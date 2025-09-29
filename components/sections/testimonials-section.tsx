import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Christiaan quickly aligned our business goals with a shippable architecture and delivered on time.",
    author: "Client Name, CTO @ Company",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <SectionHeading>Testimonials</SectionHeading>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-lg text-card-foreground mb-4 italic">"{testimonial.quote}"</blockquote>
                  <cite className="text-muted-foreground text-sm">— {testimonial.author}</cite>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
