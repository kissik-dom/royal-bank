import { Authenticated, Unauthenticated } from "convex/react";
import { ArrowRight, ArrowUpRight, BarChart3, CreditCard, Crown, DollarSign, Shield } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  { icon: DollarSign, title: "Smart Accounts", desc: "AI-managed checking & savings" },
  { icon: CreditCard, title: "Virtual Cards", desc: "Instant virtual debit cards" },
  { icon: ArrowUpRight, title: "Transfers", desc: "Instant AI-verified transfers" },
  { icon: BarChart3, title: "Analytics", desc: "AI spending insights & budgets" },
  { icon: Shield, title: "Security", desc: "Biometric + AI fraud detection" },
  { icon: Crown, title: "Premium", desc: "Royal tier banking privileges" },
];

export function LandingPage() {
  return (
    <>
      <Authenticated><Navigate to="/dashboard" replace /></Authenticated>
      <Unauthenticated>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
            <div className="relative mb-8">
              <div className="absolute inset-0 blur-3xl opacity-30 rounded-full scale-150" style={{ backgroundColor: "#FFD700" }} />
              <div className="relative size-20 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FFD700, #E0BD00)", boxShadow: "0 0 20px #FFD7004D" }}>
                <Crown className="size-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #FFD700, #FFE44D, #E91E8C)" }}>Royal Bank</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10">Premium AI-powered digital banking. Smart accounts, instant transfers, and AI financial advisors.</p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="px-8" style={{ backgroundColor: "#FFD700", color: "#0A0A0F" }}>
                <Link to="/signup">Get Started <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[rgba(255,255,255,0.15)] hover:bg-[#1A1A24]">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="px-4 pb-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-xl bg-[#12121A] border border-[rgba(255,255,255,0.06)] hover:border-[#FFD700]/30 transition-colors">
                  <f.icon className="size-8 mb-3" style={{ color: "#FFD700" }} />
                  <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <footer className="border-t border-[rgba(255,255,255,0.06)] py-6 text-center text-muted-foreground text-sm">Centillion OS · Part of the Centillion Ecosystem</footer>
        </div>
      </Unauthenticated>
    </>
  );
}
