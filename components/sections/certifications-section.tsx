import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    url: "https://freecodecamp.org/certification/fcc51cb3aa4-b442-416b-b02c-36c0368b6d44/javascript-algorithms-and-data-structures",
    fallback: "/certificates/Coursera HTML and CSS In Depth.pdf",
  },
  {
    title: "Data Scientist Career Path",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Data Science.png",
    fallback: "/certificates/Data Science.png",
  },
  {
    title: "Learn Data Analysis with Pandas",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Data Analysis.png",
    fallback: "/certificates/Data Analysis.png",
  },
  {
    title: "How to Clean Data with Python",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Clean Data.png",
    fallback: "/certificates/Clean Data.png",
  },
  {
    title: "Learn C#",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/C#.png",
    fallback: "/certificates/C#.png",
  },
  {
    title: "Learn Bootstrap",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Bootstrap.png",
    fallback: "/certificates/Bootstrap.png",
  },
  {
    title: "Learn CSS",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/CSS.png",
    fallback: "/certificates/CSS.png",
  },
  {
    title: "Learn HTML",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/HTML.png",
    fallback: "/certificates/HTML.png",
  },
  {
    title: "Object Oriented PHP & MVC",
    issuer: "Udemy",
    date: "2020",
    url: "/certificates/OOP PHP MVC.png",
    fallback: "/certificates/OOP PHP MVC.png",
  },
  {
    title: "PHP for Beginners - Become a PHP Master",
    issuer: "Udemy",
    date: "2021",
    url: "/certificates/PHP MASTER CMS.jpg",
    fallback: "/certificates/PHP MASTER CMS.jpg",
  },
  {
    title: "Object-Oriented PHP",
    issuer: "Udemy",
    date: "2021",
    url: "/certificates/PHP OOP.png",
    fallback: "/certificates/PHP OOP.png",
  },
  {
    title: "Statistics Fundamentals (Part 1)",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Stats_1.png",
    fallback:  "/certificates/Stats_1.png",
  },
  {
    title: "Statistics Fundamentals (Part 2)",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Stats_2.png",
    fallback: "/certificates/Stats_2.png",
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    date: "2020",
    url: "/certificates/WEB DEV.jpg",
    fallback: "/certificates/WEB DEV.jpg",
  },
  {
    title: "Web Scraping with Python",
    issuer: "Codecademy",
    date: "2020",
    url: "/certificates/Web Scrape.png",
    fallback:"/certificates/Web Scrape.png",
  },
  {
    title: "OfferZen Project Thrive Mentoring Programme",
    issuer: "OfferZen",
    date: "Feb 2022",
    url: "/certificates/Christiaan Mauritz Visagie - OfferZen.pdf",
    fallback: "/certificates/Christiaan Mauritz Visagie - OfferZen.pdf",
  },
  {
    title: "Advanced React",
    issuer: "Coursera (Meta)",
    date: "Jan 2023",
    url: "https://coursera.org/verify/YF4XJD4CXNJV", //:contentReference[oaicite:0]{index=0}
    fallback: "/certificates/Coursera - Advanced React.pdf",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera (Meta)",
    date: "Nov 2022",
    url: "https://coursera.org/verify/4NFHXGKQS5G6", //:contentReference[oaicite:1]{index=1}
    fallback: "/certificates/Coursera - Intro To Front-end Dev.pdf",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Coursera (Meta)",
    date: "Dec 2022",
    url: "https://coursera.org/verify/GMLBDZBRQ3NQ", //:contentReference[oaicite:2]{index=2}
    fallback: "/certificates/Coursera - Programming With JS.pdf",
  },
  {
    title: "React Basics",
    issuer: "Coursera (Meta)",
    date: "Jan 2023",
    url: "https://coursera.org/verify/VVL5E75HA4ZD", //:contentReference[oaicite:3]{index=3}
    fallback: "/certificates/Coursera - React Basics.pdf",
  },
  {
    title: "Principles of UX/UI Design",
    issuer: "Coursera (Meta)",
    date: "Feb 2023",
    url: "https://coursera.org/verify/HND3BY3DB293", //:contentReference[oaicite:0]{index=0}
    fallback: "/certificates/Coursera - UI:UX",
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Coursera (Meta)",
    date: "Dec 2022",
    url: "https://coursera.org/verify/2PZLYNXZFBEN", //:contentReference[oaicite:1]{index=1}
    fallback: "/certificates/Coursera HTML and CSS In Depth.pdf",
  },
  {
    title: "Version Control",
    issuer: "Coursera (Meta)",
    date: "Dec 2022",
    url: "https://coursera.org/verify/YLTNRJNTXGUE", //:contentReference[oaicite:2]{index=2}
    fallback: "/certificates/Coursera version-control.pdf",
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
                  <h3 className="font-semibold text-card-foreground">
                    {cert.url && cert.url.startsWith("https") ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary"
                      >
                        {cert.title}
                      </a>
                    ) : cert.fallback ? (
                      <a
                        href={cert.fallback}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h3>
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

