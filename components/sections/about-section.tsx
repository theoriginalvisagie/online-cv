import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading>About</SectionHeading>
      <div className="prose prose-lg prose-invert max-w-none">
        <p className="text-muted-foreground leading-relaxed">
          I'm Christiaan Visagie, a software engineer based in Johannesburg, South Africa. I help teams turn ambiguous
          business needs into scalable, production-ready software. I work across Laravel, Next.js/React, MySQL, Docker,
          and Traefik with CI/CD on GitHub Actions.
        </p>
      </div>
    </section>
  )
}
