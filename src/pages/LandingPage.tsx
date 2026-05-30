import { ArrowRight, BarChart3, CreditCard, Crown, DollarSign, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: DollarSign, title: "Smart Accounts", desc: "AI-managed checking & savings with 4.75% APY" },
  { icon: CreditCard, title: "Virtual Cards", desc: "Instant virtual debit cards with custom limits" },
  { icon: Zap, title: "Instant Transfers", desc: "Send money anywhere in seconds" },
  { icon: BarChart3, title: "AI Analytics", desc: "Spending insights & budgeting powered by AI" },
  { icon: Shield, title: "Quantum Security", desc: "Post-quantum encryption & SOC 2 compliance" },
  { icon: Globe, title: "Global Banking", desc: "195 countries, zero foreign transaction fees" },
];

const stats = [
  { value: "$2.1M+", label: "Assets Under Management" },
  { value: "99.99%", label: "Uptime" },
  { value: "0.00s", label: "Transfer Speed" },
  { value: "256-bit", label: "Quantum Encryption" },
];

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #FFD700, #E0BD00)" }}>
            <Crown className="size-4" style={{ color: "#0A0A0F" }} />
          </div>
          <span className="font-bold text-lg">Royal Bank</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-white transition-colors">Dashboard</Link>
          <Link to="/dashboard"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0F" }}>
            Open Bank
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-150" style={{ backgroundColor: "#FFD700" }} />
          <div className="relative size-20 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #FFD700, #E0BD00)", boxShadow: "0 0 40px rgba(255,215,0,0.25)" }}>
            <Crown className="size-10 text-white" />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ backgroundColor: "rgba(0,212,170,0.15)", color: "#00D4AA" }}>
          <Shield className="size-3" /> SOC 2 Compliant · Quantum Encrypted
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #FFD700, #FFE44D, #FFD700)" }}>
            Royal Bank
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8">
          Premium AI-powered digital banking for the Royal Kissi Kingdom. Smart accounts, instant transfers, and sovereign wealth management.
        </p>
        <div className="flex gap-4">
          <Link to="/dashboard"
            className="px-8 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105"
            style={{ backgroundColor: "#FFD700", color: "#0A0A0F" }}>
            Open Dashboard <ArrowRight className="size-4" />
          </Link>
          <Link to="/premium"
            className="px-8 py-3 rounded-xl font-semibold text-sm border border-[rgba(255,255,255,0.15)] hover:bg-[#1A1A24] transition-colors">
            View Plans
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="text-center p-4">
              <p className="text-2xl font-bold mb-1" style={{ color: "#FFD700" }}>{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Built for Sovereignty</h2>
          <p className="text-muted-foreground text-center mb-8">Every feature designed for the Kingdom</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="p-6 rounded-xl bg-[#12121A] border border-[rgba(255,255,255,0.06)] hover:border-[#FFD700]/20 transition-colors">
                <f.icon className="size-8 mb-3" style={{ color: "#FFD700" }} />
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-[rgba(255,255,255,0.06)] py-6 text-center text-muted-foreground text-sm">
        The Royal Bank of the Kissi Kingdom · Part of the Centillion Ecosystem
      </footer>
    </div>
  );
}
