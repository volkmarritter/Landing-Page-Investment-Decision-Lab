import { motion } from "framer-motion";
import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<"build" | "compare">("build");

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
              <span className="hidden md:inline ml-2 text-xs text-muted-foreground">A <a href="https://www.bicon.li" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-2">BICon</a> Initiative</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#output" className="hover:text-foreground transition-colors">Output</a>
            <a href="https://www.bicon.co/?tab=methodology" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Methodology</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:info@bicon.li?subject=Book%20a%2030-min%20call&body=Hi%20BICon%20team%2C%0A%0AI%20would%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20..." className="hidden md:inline-flex">
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Professional portfolio construction &amp; analysis
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                ETF portfolio construction<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">for the European investor.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A structured, rules-based environment to construct, stress-test, and compare ETF portfolios — with deep risk analysis, Monte Carlo simulation, and full transparency into every allocation decision.
              </motion.p>

              <motion.p variants={fadeIn} className="text-xs text-muted-foreground/60 mb-8 italic">
                For educational and illustration purposes only. Not investment advice.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start gap-4">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base">
                    Open the Lab <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="https://www.bicon.co/?tab=methodology" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base border-border hover:bg-secondary">
                    View Methodology
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Screenshot with tabs */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Tab switcher */}
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setActiveTab("build")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeTab === "build" ? "bg-primary text-background" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
                >
                  Build Portfolio
                </button>
                <button
                  onClick={() => setActiveTab("compare")}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeTab === "compare" ? "bg-primary text-background" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
                >
                  Compare &amp; Risk Analysis
                </button>
              </div>

              <div className="relative shadow-2xl shadow-primary/10">
                <div className="rounded-lg border border-border overflow-hidden">
                  <img
                    src={activeTab === "build" ? "/app-preview.png" : "/app-preview-2.png"}
                    alt={activeTab === "build" ? "Build Portfolio view" : "Compare Portfolios — Monte Carlo and risk metrics"}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {activeTab === "build" && (
                  <>
                    <div className="absolute top-[-14px] right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      Monte Carlo Simulation
                    </div>
                    <div className="absolute bottom-[-14px] left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      Full Look-Through
                    </div>
                  </>
                )}
                {activeTab === "compare" && (
                  <>
                    <div className="absolute top-[-14px] right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      CVaR &amp; Drawdown
                    </div>
                    <div className="absolute bottom-[-14px] left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      Side-by-Side Comparison
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
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
                desc: "Rapidly prototype allocation structures, validate inputs against coherence checks, and export institutional-grade PDF reports."
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
                  desc: "Rule-based, not AI. Every assumption and formula is documented — capital market assumptions, correlation matrix, look-through routing, FX hedging, withholding-tax drag, and Monte Carlo simulation. No live market data. Fully deterministic.",
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
                { icon: Globe, title: "European focus (CH · EU · UK)", desc: "Optimised for Swiss, EU, and UK investors — with home-bias multipliers and withholding-tax drag per base currency." },
                { icon: BarChart2, title: "Scenario-tested", desc: "Portfolios are stress-tested against three major historical crises before you commit to a structure." },
                { icon: Target, title: "Coherence-validated", desc: "Inputs are checked for structural coherence before any portfolio is generated. No silent errors." },
                { icon: TrendingUp, title: "Monte Carlo Simulation", desc: "Project portfolio outcomes across thousands of simulated paths. Visualise return distributions, drawdown risk, and probability of meeting your investment goals." },
                { icon: Layers, title: "Full Look-Through", desc: "Allocations are decomposed through ETF holdings to the underlying asset class and geographic exposure — applied across all risk calculations, stress tests, and portfolio breakdowns." }
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
              The app is intentionally rule-based and offline — no AI, no live market data, no probabilistic optimiser. Every assumption, formula, and source is documented: capital market assumptions, correlation matrix, look-through routing, FX hedging, withholding-tax drag, and an optional Monte Carlo projection. Identical inputs always yield identical outputs.
            </p>
            <a href="https://www.bicon.co/?tab=methodology" target="_blank" rel="noopener noreferrer">
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
              Book a 30-minute call with the BICon team to walk through the tool, discuss your specific portfolio requirements, or explore how the methodology applies to your situation.
            </p>
            <a href="mailto:info@bicon.li?subject=Book%20a%2030-min%20call&body=Hi%20BICon%20team%2C%0A%0AI%20would%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20...">
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
              <span className="text-xs ml-2">A <a href="https://www.bicon.li" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-2">BICon</a> Initiative</span>
              <span className="ml-4">&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href="https://www.bicon.co/?tab=methodology" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Methodology</a>
              <a href="mailto:info@bicon.li?subject=Book%20a%2030-min%20call&body=Hi%20BICon%20team%2C%0A%0AI%20would%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20..." className="hover:text-foreground transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
