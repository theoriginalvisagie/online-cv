import type React from "react"
interface SectionHeadingProps {
  children: React.ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-foreground mb-2">{children}</h2>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
    </div>
  )
}
