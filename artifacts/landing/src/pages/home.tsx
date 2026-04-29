import { motion } from "framer-motion";
import { ArrowRight, Activity, BarChart2, Layers, ChevronRight, Target, BookOpen, GitCompare, HelpCircle, TrendingUp, Globe } from "lucide-react";
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
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Activity className="w-4 h-4 text-background" />
            </div>
            <span className="font-bold text-lg tracking-tight">Investment Decision Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#methodology" className="hover:text-foreground transition-colors">Methodology</a>
          </div>
          <div className="flex items-center gap-4">
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
              Build the portfolio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">your future deserves.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Investment Decision Lab helps you construct, compare, and understand ETF portfolios tailored to your risk appetite, investment horizon, and preferred exchange. Built for Swiss and European investors who demand clarity over complexity.
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
            className="mt-20 relative rounded-lg border border-border bg-card overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-border bg-secondary/50 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs font-mono text-muted-foreground">
                Investment Decision Lab — Build Portfolio
              </div>
            </div>
            <img
              src="/app-preview.png"
              alt="Investment Decision Lab interface"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Four Core Features */}
      <section id="features" className="py-24 px-6 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Four tools. One clear outcome.</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Everything you need to go from a blank slate to a confident, well-structured portfolio.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Build Portfolio",
                  desc: "Set your base currency, investment horizon, risk appetite, and target equity allocation. Choose your preferred exchange, number of ETFs, and apply optional thematic tilts. The Lab generates a structured portfolio with detailed ETF selection and rationale.",
                  highlight: true
                },
                {
                  icon: GitCompare,
                  title: "Compare Portfolios",
                  desc: "Put multiple portfolio scenarios side by side. Adjust parameters across configurations and immediately see how allocation, risk profile, and ETF composition shift. Decision-making through direct comparison.",
                  highlight: false
                },
                {
                  icon: HelpCircle,
                  title: "Explain My Portfolio",
                  desc: "Get a plain-language breakdown of why your portfolio is structured the way it is. Understand the rationale behind each allocation decision, the role of each ETF, and how the overall mix reflects your stated preferences.",
                  highlight: false
                },
                {
                  icon: BookOpen,
                  title: "Methodology",
                  desc: "Full transparency into how the Lab makes decisions. Read the underlying investment principles, data sources, weighting logic, and assumptions that power every portfolio recommendation.",
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

      {/* 3. Portfolio Parameters */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Your inputs. Your portfolio.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                The Lab takes your constraints and preferences and builds a portfolio around them — not a generic template. Every parameter you set shapes the final output.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Base Currency", detail: "CHF, EUR, USD and more" },
                  { label: "Investment Horizon", detail: "From 1 to 30+ years" },
                  { label: "Risk Appetite", detail: "Low · Moderate · High · Very High" },
                  { label: "Target Equity Allocation", detail: "Slider-controlled, from 0% to 100%" },
                  { label: "Number of ETFs", detail: "Auto-optimized or manually specified" },
                  { label: "Preferred Exchange", detail: "SIX Zürich and other European exchanges" },
                  { label: "Thematic Tilt", detail: "Optional focus areas like ESG, Technology, and more" },
                  { label: "Currency Hedging", detail: "Hedge foreign exposure to reduce FX risk" },
                  { label: "Synthetic ETFs", detail: "Opt in to swap-based replication for tax efficiency" }
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: TrendingUp, title: "Risk-Adjusted", desc: "Portfolios calibrated to your stated risk appetite and time horizon." },
                { icon: Globe, title: "Swiss & EU Focus", desc: "Exchange options centred on SIX Zürich and major European markets." },
                { icon: BarChart2, title: "Scenario Saving", desc: "Save portfolio configurations and revisit them at any time." },
                { icon: Target, title: "Transparent Rationale", desc: "Every ETF selection comes with a clear explanation of why it's included." }
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

      {/* 4. Methodology */}
      <section id="methodology" className="py-24 px-6 border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built on transparent methodology</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Lab doesn't hide its logic. Every portfolio recommendation follows a published methodology covering allocation principles, ETF selection criteria, exchange preferences, and rebalancing guidelines. Open the Methodology tab inside the app to read exactly how your portfolio was built.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-sm border-border">
                Read the Methodology <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Footer */}
      <footer className="border-t border-border bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build your portfolio?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Set your parameters, generate your portfolio, and get a full explanation of every decision — in English or German.
          </p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-14 px-10 text-lg rounded-sm bg-primary text-primary-foreground hover:bg-primary/90">
              Open Investment Decision Lab <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>

          <div className="mt-24 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Activity className="w-4 h-4" />
              <span className="font-bold tracking-tight">Investment Decision Lab</span>
              <span className="ml-4">&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href={`${APP_URL}#methodology`} className="hover:text-foreground transition-colors">Methodology</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
