'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-xl font-medium text-muted-foreground mb-2">Anders Altmann</h1>
          <p className="text-sm text-muted-foreground">Hobbyist webbutvecklare</p>
        </header>

        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-8">
            Hallå där! Jag är en hobbyist webbutvecklare och bor i Stockholm. Det här är min Portfolio.
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Är i första hand utbildad inom IT Support men har under senaste åren utbildat mig på egen hand inom webbutveckling och frontend utveckling. Min starkaste gren är Wordpress men har även börjat titta lite på React.js Next.js Shopify och Builder.io
          </p>
        </section>

        {/* Technologies Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Wordpress", href: "#" },
              { name: "React.js", href: "#" },
              { name: "NextJs", href: "#" },
              { name: "Github", href: "#" },
              { name: "Elementor Pro", href: "#" },
              { name: "Shopify", href: "#" },
              { name: "Webflow", href: "#" },
              { name: "Woocommerce", href: "#" },
            ].map((tech) => (
              <Link
                key={tech.name}
                href={tech.href}
                className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-accent transition-colors"
              >
                {tech.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Skills and Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Other Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Annat kunnande</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Windows operativsystem (IT-Support)</h4>
                  <p className="text-sm text-muted-foreground">Har jobbat med Windows 98/NT</p>
                </div>
                <div>
                  <h4 className="font-medium">PC-datorer, installation och underhåll (IT-Support)</h4>
                  <p className="text-sm text-muted-foreground">Installation och gott underhåll på företagets PC maskiner Dell, HP, Acer, Lenovo</p>
                </div>
                <div>
                  <h4 className="font-medium">Mobiltelefoni (IT-Support)</h4>
                  <p className="text-sm text-muted-foreground">Windows Phone, Google Android OS, iPhone iOS och iPad iOS</p>
                </div>
                <div>
                  <h4 className="font-medium">Remote verktyg (IT-Support)</h4>
                  <p className="text-sm text-muted-foreground">TeamViewer, RDP, Teams och AnyDesk</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Certifieringar</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Web Developer (Mimo)</h4>
                  <p className="text-sm text-muted-foreground">(Dec 2021)</p>
                </div>
                <div>
                  <h4 className="font-medium">ITIL (IT-Support)</h4>
                  <p className="text-sm text-muted-foreground">(Juni 2021)</p>
                </div>
                <div>
                  <h4 className="font-medium">MS 900, Office 365 (IT-Support)</h4>
                  <p className="text-sm text-muted-foreground">(Juni 2021)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Mina Projekt</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="#"
              className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-accent transition-colors"
            >
              <div className="font-medium">dysd butik</div>
              <div className="text-sm text-muted-foreground">Shopify/builder.io/Next.JS (Dec 2023)</div>
            </Link>
            {/* Add more project links here if needed */}
          </div>
        </section>
      </main>
    </div>
  )
}