import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Christiaan Visagie — Software Engineer | Online CV",
  description:
    "Full-stack engineer building Laravel + Next.js products, with DevOps on Docker/Traefik. View experience, projects, skills, and contact details.",
  keywords: ["Software Engineer", "Laravel", "Next.js", "Docker", "DevOps", "Portfolio", "Resume", "South Africa"],
  authors: [{ name: "Christiaan Visagie" }],
  openGraph: {
    title: "Christiaan Visagie — Software Engineer",
    description: "Full-stack engineer building Laravel + Next.js products, with DevOps on Docker/Traefik.",
    url: "https://cv.christiaanvisagie.co.za",
    siteName: "Christiaan Visagie Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christiaan Visagie — Software Engineer",
    description: "Full-stack engineer building Laravel + Next.js products, with DevOps on Docker/Traefik.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  )
}
