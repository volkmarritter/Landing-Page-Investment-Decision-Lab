import { motion } from "framer-motion";
import { ArrowRight, Activity, BarChart2, Zap, Layers, ChevronRight, Shield, Target, Database, Lock, Network, Cpu, LineChart } from "lucide-react";
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
            <span className="font-display font-bold text-lg tracking-tight">Decision Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Capabilities</a>
            <a href="#integrations" className="hover:text-foreground transition-colors">Data Sources</a>
            <a href="#frameworks" className="hover:text-foreground transition-colors">Frameworks</a>
            <a href="#manifesto" className="hover:text-foreground transition-colors">Manifesto</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-sm">Sign In</Button>
            <Button className="rounded-sm font-medium">Request Access</Button>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
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
              v2.0 Beta Available
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
              Structure the chaos. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Command your conviction.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              The premier scenario analysis and cognitive structuring environment for investors who refuse to rely on gut feeling. Model outcomes, challenge assumptions, and decide with lethal precision.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base">
                Enter the Lab <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base border-border hover:bg-secondary">
                View Methodology
              </Button>
            </motion.div>
          </motion.div>

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
              <div className="ml-4 text-xs font-mono text-muted-foreground flex items-center gap-4">
                <span>PROJECT: OMEGA_PROTOCOL</span>
                <span className="text-primary">LIVE_DATA_FEED</span>
              </div>
            </div>
            <img 
              src="/hero-data.png" 
              alt="Abstract financial data visualization" 
              className="w-full h-auto object-cover opacity-90 mix-blend-screen"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. The Problem / Thesis */}
      <section className="py-24 px-6 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-6">
                The market is noisy. <br/>Your decisions shouldn't be.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-8">
                Most analysts drown in unstructured data, qualitative narratives, and spreadsheet chaos. Investment Decision Lab provides a rigid, logical environment to force intellectual honesty and expose the raw mechanics of an investment thesis.
              </motion.p>
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-4xl font-display font-bold text-primary">87%</h4>
                  <p className="text-sm text-muted-foreground">Faster thesis invalidation</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-display font-bold text-accent">0</h4>
                  <p className="text-sm text-muted-foreground">Tolerance for cognitive bias</p>
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeIn} className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="relative h-full w-full border border-border rounded-full flex items-center justify-center bg-card/50">
                <div className="w-[80%] h-[80%] border border-border/50 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                  <div className="w-[60%] h-[60%] border border-primary/30 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Capabilities */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Tools engineered for truth-seeking, not confirmation bias.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Scenario Matrix",
                desc: "Model complex, multi-variable outcomes instantly. Stop fighting with circular references and start simulating reality."
              },
              {
                icon: BarChart2,
                title: "Probabilistic Weighting",
                desc: "Assign conviction scores to assertions. The system automatically highlights where your thesis is mathematically weakest."
              },
              {
                icon: Shield,
                title: "Bias Detection",
                desc: "Algorithmic checks against common cognitive pitfalls. It flags overconfidence, sunk cost fallacies, and recency bias."
              },
              {
                icon: Zap,
                title: "Live Data Injection",
                desc: "Hook directly into financial APIs. Your models update in real-time as market conditions shift, without manual entry."
              },
              {
                icon: Target,
                title: "Thesis Tracking",
                desc: "Log your rationale at the moment of execution. Compare expected outcomes vs reality to improve future hit rates."
              },
              {
                icon: Activity,
                title: "Stress Testing",
                desc: "Run monte-carlo simulations on your base assumptions. See exactly what it takes to break your model."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-lg border border-border bg-card/40 hover:bg-secondary/40 transition-colors group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Interface Preview */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-6">
                A canvas for conviction.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                The interface is deliberately sparse. No distracting animations. No marketing fluff. Just the data you need, structured the way you think.
              </p>
              <ul className="space-y-4">
                {[
                  "Keyboard-first navigation for terminal-speed execution",
                  "Dark-mode native to reduce eye strain during deep work",
                  "Customizable layouts based on your specific analytic frameworks",
                  "Exportable structured reports for investment committees"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl rounded-full" />
              <img 
                src="/scenario-ui.png" 
                alt="Scenario analysis interface" 
                className="relative z-10 rounded-lg border border-border shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Data Integrations */}
      <section id="integrations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4">
              Agnostic Data Ingestion
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
              Connect to the terminal of your choice. We process the feeds; you process the logic.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Bloomberg B-PIPE", icon: Database },
              { label: "Refinitiv DataScope", icon: Network },
              { label: "FactSet Real-Time", icon: LineChart },
              { label: "Custom REST APIs", icon: Cpu }
            ].map((source, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-lg border border-border/50 bg-card/20 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors"
              >
                <source.icon className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{source.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Security and Privacy */}
      <section className="py-24 px-6 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <Lock className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-bold mb-1">SOC 2 Type II</h4>
                  <p className="text-xs text-muted-foreground">Certified compliance for enterprise security.</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <Shield className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-bold mb-1">End-to-End Encryption</h4>
                  <p className="text-xs text-muted-foreground">Your models remain strictly confidential.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-6">
                Zero Data Leakage.
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Your investment logic is your absolute edge. Decision Lab is built on a zero-knowledge architecture. We cannot see your models, your inputs, or your conclusions.
              </p>
              <Button variant="outline" className="rounded-sm border-border">View Security Whitepaper</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Manifesto */}
      <section id="manifesto" className="py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 bg-background/80 backdrop-blur-sm py-12 px-6 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">The Analyst's Manifesto</h2>
            <div className="space-y-6 text-xl text-muted-foreground italic font-serif leading-relaxed">
              <p>"We believe that truth is found in the rigorous testing of assumptions."</p>
              <p>"We reject the illusion of certainty and embrace the calculus of probability."</p>
              <p>"We build systems to protect ourselves from our own psychology."</p>
              <p className="text-foreground not-italic font-sans font-bold mt-8">Welcome to the Lab.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. CTA Footer */}
      <footer className="border-t border-border bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to structure your thinking?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join a select group of fund managers, quants, and rigorous thinkers who have already upgraded their decision engines.
          </p>
          <Button size="lg" className="h-14 px-10 text-lg rounded-sm bg-primary text-primary-foreground hover:bg-primary/90">
            Request Early Access
          </Button>
          
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Activity className="w-4 h-4" />
              <span className="font-display font-bold tracking-tight">Decision Lab</span>
              <span className="ml-4">&copy; {new Date().getFullYear()} All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">System Status</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
