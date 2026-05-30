import { Check, Crown, Diamond, Shield, Star, Zap } from "lucide-react";

const tiers = [
  {
    name: "Royal",
    price: "Free",
    color: "#FFD700",
    current: true,
    features: [
      "Royal Checking Account",
      "Virtual Debit Card",
      "Instant Transfers",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Imperial",
    price: "$29/mo",
    color: "#C4A1FF",
    current: false,
    features: [
      "Everything in Royal",
      "Premium Virtual Cards (5)",
      "Priority Transfers",
      "AI Financial Advisor",
      "SOC 2 Compliance Reports",
      "24/7 Priority Support",
      "No Foreign Transaction Fees",
    ],
  },
  {
    name: "Sovereign",
    price: "$99/mo",
    color: "#00D4AA",
    current: false,
    features: [
      "Everything in Imperial",
      "Unlimited Virtual Cards",
      "Quantum-Grade Encryption",
      "Multi-Sig Treasury",
      "Private Banking Concierge",
      "Custom API Access",
      "Dedicated Account Manager",
      "International Wire — Free",
    ],
  },
];

const privileges = [
  { icon: Shield, title: "SOC 2 Type II", desc: "Enterprise-grade security compliance with annual audits", color: "#00D4AA" },
  { icon: Zap, title: "Quantum Encryption", desc: "Post-quantum cryptographic protection for all transactions", color: "#C4A1FF" },
  { icon: Diamond, title: "Multi-Sig Vaults", desc: "Require multiple approvals for high-value transactions", color: "#FFD700" },
  { icon: Star, title: "AI Fraud Detection", desc: "Real-time anomaly detection powered by neural networks", color: "#FF8C42" },
];

export function PremiumPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
          style={{ backgroundColor: "rgba(255,215,0,0.15)", color: "#FFD700" }}>
          <Crown className="size-3" /> Royal Tier Banking
        </div>
        <h1 className="text-3xl font-bold mb-2">Choose Your Tier</h1>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Premium banking designed for sovereign wealth management
        </p>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map(tier => (
          <div key={tier.name}
            className={`p-6 rounded-2xl border transition-colors ${tier.current ? "border-[#FFD700]/40 bg-[rgba(255,215,0,0.03)]" : "border-[rgba(255,255,255,0.06)] bg-[#12121A]"}`}>
            <div className="flex items-center gap-2 mb-1">
              <Crown className="size-4" style={{ color: tier.color }} />
              <h3 className="text-lg font-bold">{tier.name}</h3>
            </div>
            <p className="text-2xl font-bold mb-4" style={{ color: tier.color }}>{tier.price}</p>
            <ul className="space-y-2.5 mb-6">
              {tier.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="size-4 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${tier.current
              ? "bg-white/10 text-white cursor-default"
              : ""}`}
              style={tier.current ? {} : { backgroundColor: tier.color, color: "#0A0A0F" }}>
              {tier.current ? "Current Plan" : "Upgrade"}
            </button>
          </div>
        ))}
      </div>

      {/* Security Features */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Security & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {privileges.map(p => (
            <div key={p.title} className="flex items-start gap-4 p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
              <div className="size-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${p.color}15` }}>
                <p.icon className="size-5" style={{ color: p.color }} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-0.5">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
