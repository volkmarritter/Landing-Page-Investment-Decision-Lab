import { motion } from "framer-motion";
import { ArrowRight, Activity, BarChart2, Layers, ChevronRight, Target, BookOpen, GitCompare, HelpCircle, TrendingUp, Globe, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const APP_URL = "https://www.bicon.co";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary selection:text-background">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Activity className="w-4 h-4 text-background" />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight">Investment Decision Lab</span>
              <span className="hidden md:inline ml-2 text-xs text-muted-foreground">A BCon Initiative</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#output" className="hover:text-foreground transition-colors">Output</a>
            <a href="#methodology" className="hover:text-foreground transition-colors">Methodology</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={`${APP_URL}/#book`} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
              <Button variant="ghost" className="text-sm gap-2">
                <Phone className="w-4 h-4" /> Book a call
              </Button>
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-sm font-medium">Open the Lab</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Professional portfolio construction &amp; analysis
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Institutional-grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">portfolio construction.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Investment Decision Lab gives investment professionals and sophisticated private investors a structured, rules-based environment to construct, stress-test, and compare ETF portfolios — with full transparency into every allocation decision.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base">
                  Open the Lab <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#methodology">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base border-border hover:bg-secondary">
                  View Methodology
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* App Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative shadow-2xl shadow-primary/5"
          >
            <div className="rounded-lg border border-border overflow-hidden">
              <img
                src="/app-preview.png"
                alt="Investment Decision Lab — portfolio comparison and risk analysis"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-[-12px] left-4 px-3 py-2 rounded-md bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-foreground shadow-lg">
              Monte Carlo Simulation
            </div>
            <div className="absolute top-[-12px] right-4 px-3 py-2 rounded-md bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-foreground shadow-lg">
              3 Stress Tests
            </div>
            <div className="absolute bottom-[-12px] left-4 px-3 py-2 rounded-md bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-foreground shadow-lg">
              Save Scenarios
            </div>
            <div className="absolute bottom-[-12px] right-4 px-3 py-2 rounded-md bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-foreground shadow-lg">
              Full Look-Through
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Who it's for */}
      <section className="py-16 px-6 border-t border-border bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Portfolio Managers",
                desc: "Rapidly prototype allocation structures, validate inputs against coherence checks, and export institutional-grade PDF reports for investment committees."
              },
              {
                title: "Independent Advisors",
                desc: "Build client-specific ETF portfolios with full rationale documentation. Compare scenarios side by side and stress-test against 2008, COVID, and 2022 rate shocks."
              },
              {
                title: "Sophisticated Private Investors",
                desc: "Move beyond generic model portfolios. Define your own constraints, understand the mechanics of your allocation, and make decisions backed by risk metrics — not gut feel."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="p-6 rounded-lg border border-border/50 bg-card/30"
              >
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Four Core Features */}
      <section id="features" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Four analytical modules.</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Covering the full decision cycle from construction to explanation.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Build Portfolio",
                  desc: "Define your constraints: base currency (CHF and others), investment horizon, risk appetite, target equity allocation, number of ETFs, preferred exchange (SIX Zürich and others), thematic tilt, currency hedging, and synthetic ETF inclusion. Inputs are validated against structural coherence checks before a portfolio is generated.",
                  highlight: true
                },
                {
                  icon: GitCompare,
                  title: "Compare Portfolios",
                  desc: "Place two portfolios side by side with full analytical depth — geographic allocation breakdown, risk and performance metrics (expected return, volatility, Sharpe ratio, max drawdown), deterministic scenario stress tests (2008 Financial Crisis, 2020 COVID Crash, 2022 Rates Shock), and Monte Carlo simulation.",
                  highlight: false
                },
                {
                  icon: HelpCircle,
                  title: "Explain My Portfolio",
                  desc: "Every allocation decision comes with a plain-language explanation of why each ETF is included, what role it plays in the portfolio, and how the overall structure reflects your stated parameters. No black boxes.",
                  highlight: false
                },
                {
                  icon: BookOpen,
                  title: "Methodology",
                  desc: "Full transparency into the rules and assumptions underlying every recommendation — capital market assumptions, correlation matrix, asset class definitions, ETF selection criteria, exchange preference logic, and rebalancing principles.",
                  highlight: false
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-8 rounded-lg border transition-colors group ${feature.highlight ? "border-primary/40 bg-primary/5 hover:bg-primary/10" : "border-border bg-card/40 hover:bg-secondary/40"}`}
                >
                  <feature.icon className={`w-8 h-8 mb-4 group-hover:scale-110 transition-transform ${feature.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Portfolio Output Detail */}
      <section id="output" className="py-24 px-6 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Structured output, not a spreadsheet.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every portfolio generated includes a full breakdown across asset classes, regions, and instruments — with the rationale to back it up. Exportable as PDF for client presentations or investment committee review.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { label: "Investor Profile Summary", detail: "Currency, risk, horizon, equity target, ETF count" },
                  { label: "Target Asset Allocation", detail: "Cash, Bonds, Equities, Satellites with precise weights" },
                  { label: "Geographic Breakdown", detail: "US, Swiss, European, EM, Japan, UK equity exposure" },
                  { label: "Allocation by Bucket", detail: "Per-ETF holdings table with asset class and region" },
                  { label: "Risk & Performance Metrics", detail: "Expected return, volatility, Sharpe ratio, max drawdown" },
                  { label: "Scenario Stress Tests", detail: "2008 Financial Crisis · 2020 COVID Crash · 2022 Rates Shock" },
                  { label: "Monte Carlo Simulation", detail: "Probabilistic range of outcomes over your investment horizon" },
                  { label: "PDF Export", detail: "Standard report and detailed institutional-grade PDF" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-muted-foreground"> — {item.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-sm gap-2">
                    <FileText className="w-4 h-4" /> Try it now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: TrendingUp, title: "Rules-based", desc: "Every portfolio follows a consistent, documented set of construction rules — not discretionary judgement." },
                { icon: Globe, title: "Swiss & EU focus", desc: "SIX Zürich as preferred exchange, CHF as default currency. Optimised for the Swiss and European investor." },
                { icon: BarChart2, title: "Scenario-tested", desc: "Portfolios are stress-tested against three major historical crises before you commit to a structure." },
                { icon: Target, title: "Coherence-validated", desc: "Inputs are checked for structural coherence before any portfolio is generated. No silent errors." }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-lg border border-border bg-card/50"
                >
                  <card.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-sm mb-1">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Methodology */}
      <section id="methodology" className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Transparent by design</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Every recommendation is backed by a published methodology — covering capital market assumptions, fixed correlation matrices, ETF selection criteria, exchange preferences, and rebalancing logic. Open the Methodology tab to read exactly how your portfolio was constructed.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-sm border-border gap-2">
                <BookOpen className="w-4 h-4" /> Read the Methodology
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 6. Advisory CTA */}
      <section className="py-20 px-6 border-t border-border bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Need a guided walkthrough?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a 30-minute call with the BCon team to walk through the tool, discuss your specific portfolio requirements, or explore how the methodology applies to your situation.
            </p>
            <a href={`${APP_URL}`} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-sm gap-2 h-12 px-8">
                <Phone className="w-4 h-4" /> Book a 30-min call
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <footer className="border-t border-border bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build a better portfolio?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Set your constraints, generate a structured allocation, stress-test it against historical crises, and export a professional PDF — in minutes.
          </p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-14 px-10 text-lg rounded-sm gap-2">
              Open Investment Decision Lab <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          <div className="mt-24 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Activity className="w-4 h-4" />
              <span className="font-bold tracking-tight">Investment Decision Lab</span>
              <span className="text-xs ml-2">A BCon Initiative</span>
              <span className="ml-4">&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href={`${APP_URL}`} className="hover:text-foreground transition-colors">Methodology</a>
              <a href={`${APP_URL}`} className="hover:text-foreground transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
