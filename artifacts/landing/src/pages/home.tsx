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
    transition: { staggerChildren: 0.1 }
  }
};

const APP_URL = "https://www.bicon.co";

const translations = {
  en: {
    nav: {
      features: "Features", output: "Output", methodology: "Methodology",
      bookCall: "Book a call", openLab: "Open the Lab",
    },
    hero: {
      badge: "Professional portfolio construction & analysis",
      h1line1: "Institutional-grade portfolio construction and analysis",
      h1line2: "for the European investor (CH · EU · UK).",
      desc: "A structured, rules-based environment to construct, stress-test, and compare ETF portfolios — with deep risk analysis, Monte Carlo simulation, and full transparency into every allocation decision.",
      disclaimer: "For educational and illustration purposes only. Not investment advice.",
      viewMethodology: "View Methodology",
      tabBuild: "Build Portfolio",
      tabCompare: "Compare & Risk Analysis",
      badgeMonteCarlo: "Monte Carlo Simulation",
      badgeLookThrough: "Full Look-Through",
      badgeCVar: "CVaR & Drawdown",
      badgeSideBySide: "Side-by-Side Comparison",
    },
    who: {
      items: [
        { title: "Portfolio Managers", desc: "Rapidly prototype allocation structures, validate inputs against coherence checks, and export institutional-grade PDF reports." },
        { title: "Independent Advisors", desc: "Build client-specific ETF portfolios with full rationale documentation. Compare scenarios side by side and stress-test against 2008, COVID, and 2022 rate shocks." },
        { title: "Sophisticated Private Investors", desc: "Move beyond generic model portfolios. Define your own constraints, understand the mechanics of your allocation, and make decisions backed by risk metrics — not gut feel." },
      ]
    },
    features: {
      heading: "Four analytical modules.",
      subheading: "Covering the full decision cycle from construction to explanation.",
      items: [
        { title: "Build Portfolio", desc: "Define your constraints: base currency (CHF and others), investment horizon, risk appetite, target equity allocation, number of ETFs, preferred exchange (SIX Zürich and others), thematic tilt, currency hedging, and synthetic ETF inclusion. Inputs are validated against structural coherence checks before a portfolio is generated." },
        { title: "Compare Portfolios", desc: "Place two portfolios side by side with full analytical depth — geographic allocation breakdown, risk and performance metrics (expected return, volatility, Sharpe ratio, max drawdown), deterministic scenario stress tests (2008 Financial Crisis, 2020 COVID Crash, 2022 Rates Shock), and Monte Carlo simulation." },
        { title: "Explain My Portfolio", desc: "Every allocation decision comes with a plain-language explanation of why each ETF is included, what role it plays in the portfolio, and how the overall structure reflects your stated parameters. No black boxes." },
        { title: "Methodology", desc: "Rule-based, not AI. Every assumption and formula is documented — capital market assumptions, correlation matrix, look-through routing, FX hedging, withholding-tax drag, and Monte Carlo simulation. No live market data. Fully deterministic." },
      ]
    },
    output: {
      heading: "Structured output, not a spreadsheet.",
      desc: "Every portfolio generated includes a full breakdown across asset classes, regions, and instruments — with the rationale to back it up. Exportable as PDF for client presentations or investment committee review.",
      tryNow: "Try it now",
      items: [
        { label: "Investor Profile Summary", detail: "Currency, risk, horizon, equity target, ETF count" },
        { label: "Target Asset Allocation", detail: "Cash, Bonds, Equities, Satellites with precise weights" },
        { label: "Geographic Breakdown", detail: "US, Swiss, European, EM, Japan, UK equity exposure" },
        { label: "Allocation by Bucket", detail: "Per-ETF holdings table with asset class and region" },
        { label: "Risk & Performance Metrics", detail: "Expected return, volatility, Sharpe ratio, max drawdown" },
        { label: "Scenario Stress Tests", detail: "2008 Financial Crisis · 2020 COVID Crash · 2022 Rates Shock" },
        { label: "Monte Carlo Simulation", detail: "Probabilistic range of outcomes over your investment horizon" },
        { label: "PDF Export", detail: "Standard report and detailed institutional-grade PDF" },
      ],
      cards: [
        { title: "Rules-based", desc: "Every portfolio follows a consistent, documented set of construction rules — not discretionary judgement." },
        { title: "European focus (CH · EU · UK)", desc: "Optimised for Swiss, EU, and UK investors — with home-bias multipliers and withholding-tax drag per base currency." },
        { title: "Scenario-tested", desc: "Portfolios are stress-tested against three major historical crises before you commit to a structure." },
        { title: "Coherence-validated", desc: "Inputs are checked for structural coherence before any portfolio is generated. No silent errors." },
        { title: "Monte Carlo Simulation", desc: "Project portfolio outcomes across thousands of simulated paths. Visualise return distributions, drawdown risk, and probability of meeting your investment goals." },
        { title: "Full Look-Through", desc: "Allocations are decomposed through ETF holdings to the underlying asset class and geographic exposure — applied across all risk calculations, stress tests, and portfolio breakdowns." },
      ]
    },
    methodology: {
      heading: "Transparent by design",
      desc: "The app is intentionally rule-based and offline — no AI, no live market data, no probabilistic optimiser. Every assumption, formula, and source is documented: capital market assumptions, correlation matrix, look-through routing, FX hedging, withholding-tax drag, and an optional Monte Carlo projection. Identical inputs always yield identical outputs.",
      readBtn: "Read the Methodology",
    },
    advisory: {
      heading: "Need a guided walkthrough?",
      desc: "Book a 30-minute call with the BICon team to walk through the tool, discuss your specific portfolio requirements, or explore how the methodology applies to your situation.",
      btn: "Book a 30-min call",
    },
    footer: {
      heading: "Ready to build a better portfolio?",
      desc: "Set your constraints, generate a structured allocation, stress-test it against historical crises, and export a professional PDF — in minutes.",
      btn: "Open Investment Decision Lab",
      disclaimer: "Investment Decision Lab is for educational and illustration purposes only. All returns, volatilities, correlations, and stress scenarios are static, rules-based estimates — they do not reflect live market data and do not constitute investment advice or a solicitation to buy or sell any financial instrument.",
      linkMethodology: "Methodology",
      linkBook: "Book a Call",
    }
  },
  de: {
    nav: {
      features: "Funktionen", output: "Ergebnisse", methodology: "Methodik",
      bookCall: "Termin buchen", openLab: "Zum Lab",
    },
    hero: {
      badge: "Professionelle Portfoliokonstruktion & Analyse",
      h1line1: "Institutionelle Portfoliokonstruktion und -analyse",
      h1line2: "für den europäischen Investor (CH · EU · UK).",
      desc: "Eine strukturierte, regelbasierte Umgebung zum Aufbau, Stresstesting und Vergleich von ETF-Portfolios — mit tiefgehender Risikoanalyse, Monte-Carlo-Simulation und vollständiger Transparenz bei jeder Allokationsentscheidung.",
      disclaimer: "Nur für Bildungs- und Illustrationszwecke. Keine Anlageberatung.",
      viewMethodology: "Methodik ansehen",
      tabBuild: "Portfolio aufbauen",
      tabCompare: "Vergleich & Risikoanalyse",
      badgeMonteCarlo: "Monte-Carlo-Simulation",
      badgeLookThrough: "Vollständiger Look-Through",
      badgeCVar: "CVaR & Drawdown",
      badgeSideBySide: "Direktvergleich",
    },
    who: {
      items: [
        { title: "Portfoliomanager", desc: "Allokationsstrukturen schnell prototypisieren, Eingaben auf Kohärenz prüfen und institutionelle PDF-Berichte exportieren." },
        { title: "Unabhängige Berater", desc: "Kundenspezifische ETF-Portfolios mit vollständiger Begründung erstellen. Szenarien nebeneinander vergleichen und gegen 2008, COVID und den Zinsschock 2022 stresstesten." },
        { title: "Anspruchsvolle Privatanleger", desc: "Gehen Sie über generische Musterportfolios hinaus. Definieren Sie eigene Rahmenbedingungen, verstehen Sie die Mechanik Ihrer Allokation und treffen Sie Entscheidungen auf Basis von Risikokennzahlen." },
      ]
    },
    features: {
      heading: "Vier Analysemodule.",
      subheading: "Der vollständige Entscheidungszyklus — von der Konstruktion bis zur Erklärung.",
      items: [
        { title: "Portfolio aufbauen", desc: "Definieren Sie Ihre Parameter: Basiswährung (CHF und andere), Anlagehorizont, Risikobereitschaft, Ziel-Aktienallokation, Anzahl ETFs, bevorzugte Börse (SIX Zürich und andere), thematische Ausrichtung, Währungsabsicherung und synthetische ETFs. Eingaben werden vor der Portfoliogenerierung auf strukturelle Kohärenz geprüft." },
        { title: "Portfolios vergleichen", desc: "Zwei Portfolios nebeneinander mit voller analytischer Tiefe — geografische Allokation, Risiko- und Performancekennzahlen (erwartete Rendite, Volatilität, Sharpe-Ratio, maximaler Drawdown), deterministische Szenario-Stresstests (2008, COVID 2020, Zinsschock 2022) und Monte-Carlo-Simulation." },
        { title: "Mein Portfolio erklären", desc: "Jede Allokationsentscheidung wird in klarer Sprache begründet — warum ein ETF enthalten ist, welche Rolle er spielt und wie die Gesamtstruktur Ihren Parametern entspricht. Keine Black Boxes." },
        { title: "Methodik", desc: "Regelbasiert, kein KI. Jede Annahme und Formel ist dokumentiert — Kapitalmarktannahmen, Korrelationsmatrix, Look-Through-Routing, FX-Absicherung, Quellensteuer-Drag und Monte-Carlo-Simulation. Keine Live-Marktdaten. Vollständig deterministisch." },
      ]
    },
    output: {
      heading: "Strukturierter Output, kein Spreadsheet.",
      desc: "Jedes generierte Portfolio enthält eine vollständige Aufschlüsselung nach Asset-Klassen, Regionen und Instrumenten — mit der entsprechenden Begründung. Exportierbar als PDF für Kundenpräsentationen oder den Anlageausschuss.",
      tryNow: "Jetzt ausprobieren",
      items: [
        { label: "Investorenprofil", detail: "Währung, Risiko, Horizont, Aktienziel, ETF-Anzahl" },
        { label: "Ziel-Asset-Allokation", detail: "Cash, Anleihen, Aktien, Satelliten mit präzisen Gewichten" },
        { label: "Geografische Aufschlüsselung", detail: "USA, Schweiz, Europa, EM, Japan, UK" },
        { label: "Allokation nach Bucket", detail: "ETF-Tabelle mit Asset-Klasse und Region" },
        { label: "Risiko- & Performancekennzahlen", detail: "Erwartete Rendite, Volatilität, Sharpe-Ratio, Max. Drawdown" },
        { label: "Szenario-Stresstests", detail: "Finanzkrise 2008 · COVID-Crash 2020 · Zinsschock 2022" },
        { label: "Monte-Carlo-Simulation", detail: "Probabilistische Bandbreite der Ergebnisse über den Anlagehorizont" },
        { label: "PDF-Export", detail: "Standardbericht und detaillierter institutioneller PDF" },
      ],
      cards: [
        { title: "Regelbasiert", desc: "Jedes Portfolio folgt einem konsistenten, dokumentierten Regelwerk — keine diskretionären Entscheidungen." },
        { title: "Europäischer Fokus (CH · EU · UK)", desc: "Optimiert für Schweizer, EU- und UK-Investoren — mit Home-Bias-Multiplikatoren und Quellensteuer-Drag je Basiswährung." },
        { title: "Stresstested", desc: "Portfolios werden vor der Festlegung gegen drei historische Krisen getestet." },
        { title: "Kohärenz-validiert", desc: "Eingaben werden vor der Portfoliogenerierung auf Kohärenz geprüft. Keine stillen Fehler." },
        { title: "Monte-Carlo-Simulation", desc: "Portfolioergebnisse über tausende simulierte Pfade projizieren. Renditeverteilungen, Drawdown-Risiko und Wahrscheinlichkeit der Zielerreichung visualisieren." },
        { title: "Vollständiger Look-Through", desc: "Allokationen werden durch ETF-Bestände bis zur zugrunde liegenden Asset-Klasse aufgeschlüsselt — angewendet auf alle Risikoberechnungen, Stresstests und Portfolio-Breakdowns." },
      ]
    },
    methodology: {
      heading: "Transparent by Design",
      desc: "Die App ist bewusst regelbasiert und offline — kein KI, keine Live-Marktdaten, kein probabilistischer Optimierer. Jede Annahme, Formel und Quelle ist dokumentiert: Kapitalmarktannahmen, Korrelationsmatrix, Look-Through-Routing, FX-Absicherung, Quellensteuer-Drag und eine optionale Monte-Carlo-Projektion. Gleiche Eingaben liefern stets gleiche Ausgaben.",
      readBtn: "Methodik lesen",
    },
    advisory: {
      heading: "Möchten Sie eine geführte Demo?",
      desc: "Buchen Sie einen 30-Minuten-Call mit dem BICon-Team, um das Tool zu erkunden, Ihre spezifischen Portfolioanforderungen zu besprechen oder die Methodik auf Ihre Situation anzuwenden.",
      btn: "30-Min-Call buchen",
    },
    footer: {
      heading: "Bereit für ein besseres Portfolio?",
      desc: "Definieren Sie Ihre Parameter, generieren Sie eine strukturierte Allokation, testen Sie sie gegen historische Krisen und exportieren Sie ein professionelles PDF — in wenigen Minuten.",
      btn: "Investment Decision Lab öffnen",
      disclaimer: "Investment Decision Lab dient ausschliesslich Bildungs- und Illustrationszwecken. Alle Renditen, Volatilitäten, Korrelationen und Stressszenarien sind statische, regelbasierte Schätzungen — sie spiegeln keine Live-Marktdaten wider und stellen keine Anlageberatung oder Aufforderung zum Kauf oder Verkauf von Finanzinstrumenten dar.",
      linkMethodology: "Methodik",
      linkBook: "Termin buchen",
    }
  }
};

const cardIcons = [TrendingUp, Globe, BarChart2, Target, TrendingUp, Layers];
const featureIcons = [Layers, GitCompare, HelpCircle, BookOpen];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"build" | "compare">("build");
  const [lang, setLang] = useState<"en" | "de">("en");
  const t = translations[lang];
  const appUrl = lang === "de" ? `${APP_URL}/?lang=de` : APP_URL;
  const methodologyUrl = lang === "de" ? "https://www.bicon.co/?tab=methodology&lang=de" : "https://www.bicon.co/?tab=methodology";

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
            <a href="#features" className="hover:text-foreground transition-colors">{t.nav.features}</a>
            <a href="#output" className="hover:text-foreground transition-colors">{t.nav.output}</a>
            <a href={methodologyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{t.nav.methodology}</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-md overflow-hidden text-xs font-medium">
              <button onClick={() => setLang("en")} className={`px-2.5 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-background" : "text-muted-foreground hover:text-foreground"}`}>EN</button>
              <button onClick={() => setLang("de")} className={`px-2.5 py-1.5 transition-colors ${lang === "de" ? "bg-primary text-background" : "text-muted-foreground hover:text-foreground"}`}>DE</button>
            </div>
            <a href={`mailto:info@bicon.li?subject=Book%20a%2030-min%20call&body=Hi%20BICon%20team%2C%0A%0AI%20would%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20...`} className="hidden md:inline-flex">
              <Button variant="ghost" className="text-sm gap-2">
                <Phone className="w-4 h-4" /> {t.nav.bookCall}
              </Button>
            </a>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-sm font-medium">{t.nav.openLab}</Button>
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
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                {t.hero.badge}
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                {t.hero.h1line1}<br />
                <span className="text-xl md:text-2xl xl:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t.hero.h1line2}</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t.hero.desc}
              </motion.p>

              <motion.p variants={fadeIn} className="text-xs text-muted-foreground/60 mb-8 italic">
                {t.hero.disclaimer}
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start gap-4">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base">
                    {t.nav.openLab} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href={methodologyUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-sm text-base border-border hover:bg-secondary">
                    {t.hero.viewMethodology}
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Screenshot with tabs */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
              <div className="flex gap-2 mb-3">
                <button onClick={() => setActiveTab("build")} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeTab === "build" ? "bg-primary text-background" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                  {t.hero.tabBuild}
                </button>
                <button onClick={() => setActiveTab("compare")} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeTab === "compare" ? "bg-primary text-background" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                  {t.hero.tabCompare}
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
                      {t.hero.badgeMonteCarlo}
                    </div>
                    <div className="absolute bottom-[-14px] left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {t.hero.badgeLookThrough}
                    </div>
                  </>
                )}
                {activeTab === "compare" && (
                  <>
                    <div className="absolute top-[-14px] right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {t.hero.badgeCVar}
                    </div>
                    <div className="absolute bottom-[-14px] left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {t.hero.badgeSideBySide}
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.who.items.map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="p-6 rounded-lg border border-border/50 bg-card/30">
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div variants={fadeIn} className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.features.heading}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">{t.features.subheading}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.features.items.map((feature, i) => {
                const Icon = featureIcons[i];
                const highlight = i === 0;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`p-8 rounded-lg border transition-colors group ${highlight ? "border-primary/40 bg-primary/5 hover:bg-primary/10" : "border-border bg-card/40 hover:bg-secondary/40"}`}>
                    <Icon className={`w-8 h-8 mb-4 group-hover:scale-110 transition-transform ${highlight ? "text-primary" : "text-muted-foreground"}`} />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Portfolio Output Detail */}
      <section id="output" className="py-24 px-6 border-t border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t.output.heading}</h2>
              <p className="text-muted-foreground text-lg mb-8">{t.output.desc}</p>
              <ul className="space-y-4 mb-8">
                {t.output.items.map((item, i) => (
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
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-sm gap-2">
                    <FileText className="w-4 h-4" /> {t.output.tryNow}
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {t.output.cards.map((card, i) => {
                const Icon = cardIcons[i];
                return (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="p-5 rounded-lg border border-border bg-card/50">
                    <Icon className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-bold text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Methodology */}
      <section id="methodology" className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t.methodology.heading}</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">{t.methodology.desc}</p>
            <a href={methodologyUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-sm border-border gap-2">
                <BookOpen className="w-4 h-4" /> {t.methodology.readBtn}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 6. Advisory CTA */}
      <section className="py-20 px-6 border-t border-border bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t.advisory.heading}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t.advisory.desc}</p>
            <a href="mailto:info@bicon.li?subject=Book%20a%2030-min%20call&body=Hi%20BICon%20team%2C%0A%0AI%20would%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20...">
              <Button className="rounded-sm gap-2 h-12 px-8">
                <Phone className="w-4 h-4" /> {t.advisory.btn}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <footer className="border-t border-border bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.footer.heading}</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">{t.footer.desc}</p>
          <a href={appUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-14 px-10 text-lg rounded-sm gap-2">
              {t.footer.btn} <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          <p className="mt-16 text-xs text-muted-foreground/50 italic max-w-2xl mx-auto leading-relaxed">
            {t.footer.disclaimer}
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Activity className="w-4 h-4" />
              <span className="font-bold tracking-tight">Investment Decision Lab</span>
              <span className="text-xs ml-2">A <a href="https://www.bicon.li" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-2">BICon</a> Initiative</span>
              <span className="ml-4">&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href={methodologyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{t.footer.linkMethodology}</a>
              <a href="mailto:info@bicon.li?subject=Book%20a%2030-min%20call&body=Hi%20BICon%20team%2C%0A%0AI%20would%20like%20to%20book%20a%2030-minute%20call%20to%20discuss%20..." className="hover:text-foreground transition-colors">{t.footer.linkBook}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
