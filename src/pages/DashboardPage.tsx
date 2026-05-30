import { ArrowDownLeft, ArrowUpRight, CreditCard, Crown, DollarSign, Eye, EyeOff, MoreHorizontal, Plus, Send, TrendingUp } from "lucide-react";
import { useState } from "react";

const transactions = [
  { id: 1, name: "Kingdom Treasury Deposit", amount: 25000, type: "credit", category: "Income", date: "May 29, 2026", icon: "👑" },
  { id: 2, name: "Sotheby's Property Fee", amount: -4250, type: "debit", category: "Real Estate", date: "May 28, 2026", icon: "🏠" },
  { id: 3, name: "Centillion AI Subscription", amount: -299, type: "debit", category: "Technology", date: "May 27, 2026", icon: "🤖" },
  { id: 4, name: "Royal Gazette Publishing", amount: -150, type: "debit", category: "Government", date: "May 26, 2026", icon: "📰" },
  { id: 5, name: "Investment Returns", amount: 12750, type: "credit", category: "Investment", date: "May 25, 2026", icon: "📈" },
  { id: 6, name: "Kingdom Member Dues", amount: 5000, type: "credit", category: "Revenue", date: "May 24, 2026", icon: "💎" },
  { id: 7, name: "Legal Services — Registry", amount: -1800, type: "debit", category: "Legal", date: "May 23, 2026", icon: "⚖️" },
  { id: 8, name: "Domain & Hosting — Vercel", amount: -240, type: "debit", category: "Technology", date: "May 22, 2026", icon: "🌐" },
];

const quickActions = [
  { label: "Send", icon: Send, color: "#FFD700" },
  { label: "Request", icon: ArrowDownLeft, color: "#00D4AA" },
  { label: "Add Card", icon: CreditCard, color: "#C4A1FF" },
  { label: "Invest", icon: TrendingUp, color: "#FF8C42" },
];

export function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 847_250.00;
  const savings = 1_250_000.00;
  const pending = 3_200.00;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Crown className="size-6" style={{ color: "#FFD700" }} />
          Good evening, Your Majesty
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Here&apos;s your financial overview</p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Balance */}
        <div className="md:col-span-2 p-6 rounded-2xl border border-[rgba(255,255,255,0.06)]"
          style={{ background: "linear-gradient(135deg, #1A1520 0%, #0F0F18 100%)" }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">Royal Checking</span>
            <button onClick={() => setShowBalance(!showBalance)} className="text-muted-foreground hover:text-white transition-colors">
              {showBalance ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
            </button>
          </div>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold tracking-tight">
              {showBalance ? `$${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "••••••••"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: "rgba(0, 212, 170, 0.15)", color: "#00D4AA" }}>
              <TrendingUp className="size-3" /> +12.4%
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-3 mt-6">
            {quickActions.map(action => (
              <button key={action.label} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="size-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${action.color}20` }}>
                  <action.icon className="size-5" style={{ color: action.color }} />
                </div>
                <span className="text-xs text-muted-foreground">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Savings */}
          <div className="p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Royal Savings</span>
              <DollarSign className="size-3.5 text-muted-foreground" />
            </div>
            <p className="text-xl font-bold" style={{ color: "#00D4AA" }}>
              {showBalance ? `$${savings.toLocaleString()}` : "••••••"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">4.75% APY</p>
          </div>
          {/* Pending */}
          <div className="p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Pending</span>
              <MoreHorizontal className="size-3.5 text-muted-foreground" />
            </div>
            <p className="text-xl font-bold" style={{ color: "#FFD700" }}>
              {showBalance ? `$${pending.toLocaleString()}` : "••••••"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">2 transactions</p>
          </div>
          {/* Virtual Card */}
          <div className="p-4 rounded-2xl border border-[rgba(255,255,255,0.06)] relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #FFD700 0%, #E0BD00 50%, #B8860B 100%)" }}>
            <div className="flex items-center justify-between mb-3">
              <Crown className="size-5" style={{ color: "#0A0A0F" }} />
              <span className="text-[10px] font-medium tracking-wider" style={{ color: "#0A0A0F" }}>ROYAL VISA</span>
            </div>
            <p className="text-sm font-mono tracking-widest mb-2" style={{ color: "#0A0A0F" }}>
              •••• •••• •••• 4291
            </p>
            <div className="flex justify-between items-end">
              <span className="text-[10px]" style={{ color: "rgba(10,10,15,0.6)" }}>NINKROYAL</span>
              <span className="text-[10px]" style={{ color: "rgba(10,10,15,0.6)" }}>12/29</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spending Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Real Estate", amount: "$4,250", pct: "52%", color: "#FFD700" },
          { label: "Technology", amount: "$539", pct: "7%", color: "#C4A1FF" },
          { label: "Government", amount: "$1,950", pct: "24%", color: "#00D4AA" },
          { label: "Other", amount: "$1,400", pct: "17%", color: "#FF8C42" },
        ].map(cat => (
          <div key={cat.label} className="p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-2 rounded-full" style={{ backgroundColor: cat.color }} />
              <span className="text-xs text-muted-foreground">{cat.label}</span>
            </div>
            <p className="text-lg font-bold">{cat.amount}</p>
            <p className="text-xs text-muted-foreground">{cat.pct} of spending</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <button className="text-xs text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
            View All <ArrowUpRight className="size-3" />
          </button>
        </div>
        <div className="space-y-1">
          {transactions.map(tx => (
            <div key={tx.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="size-10 rounded-full bg-[#1A1A24] flex items-center justify-center text-lg flex-shrink-0">
                {tx.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{tx.name}</p>
                <p className="text-xs text-muted-foreground">{tx.date} · {tx.category}</p>
              </div>
              <span className={`text-sm font-semibold tabular-nums ${tx.amount > 0 ? "" : ""}`}
                style={{ color: tx.amount > 0 ? "#00D4AA" : undefined }}>
                {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
          <h3 className="text-sm font-semibold mb-3">Savings Goal</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Kingdom Treasury Reserve</span>
            <span className="text-xs font-medium" style={{ color: "#00D4AA" }}>62.5%</span>
          </div>
          <div className="h-2 rounded-full bg-[#1A1A24] overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "62.5%", background: "linear-gradient(90deg, #00D4AA, #00E5BB)" }} />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">$1.25M saved</span>
            <span className="text-xs text-muted-foreground">$2M goal</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
          <h3 className="text-sm font-semibold mb-3">Monthly Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Income</span>
              <span className="text-sm font-medium" style={{ color: "#00D4AA" }}>+$42,750.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Expenses</span>
              <span className="text-sm font-medium">-$8,139.00</span>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.06)] pt-2 flex justify-between">
              <span className="text-xs text-muted-foreground">Net</span>
              <span className="text-sm font-bold" style={{ color: "#FFD700" }}>+$34,611.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
