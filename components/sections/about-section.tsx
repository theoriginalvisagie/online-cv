import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <div className="prose prose-lg prose-invert max-w-none">
        <p className="text-muted-foreground leading-relaxed">
          I'm Christiaan Visagie, a software engineer based in Johannesburg, South Africa. 
          I help teams turn ambiguous business needs into scalable, production-ready software. Beyond building applications, 
          I design and set up secure, multi-environment server architectures that support development, staging, and production workflows with confidence.
          <br />
          <br />
          Having worked across both the technical and business sides of organizations, I bring a rare ability to translate complex engineering concepts 
          into clear business value. This enables me to close the gaps in understanding between departments, align goals effectively, and ensure that projects
          move from idea to deployment without costly misinterpretation.
        </p>
      </div>
    </section>
  )
}
