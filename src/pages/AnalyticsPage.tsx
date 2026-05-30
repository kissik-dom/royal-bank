import { ArrowDown, ArrowUp, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

const monthlyData = [
  { month: "Jan", income: 38000, expenses: 12000 },
  { month: "Feb", income: 42000, expenses: 9500 },
  { month: "Mar", income: 35000, expenses: 15000 },
  { month: "Apr", income: 51000, expenses: 8000 },
  { month: "May", income: 42750, expenses: 8139 },
];

const categories = [
  { name: "Real Estate", amount: 4250, pct: 52.2, color: "#FFD700", trend: "up" },
  { name: "Legal Services", amount: 1800, pct: 22.1, color: "#C4A1FF", trend: "down" },
  { name: "Technology", amount: 539, pct: 6.6, color: "#00D4AA", trend: "up" },
  { name: "Government", amount: 150, pct: 1.8, color: "#FF8C42", trend: "down" },
  { name: "Infrastructure", amount: 1000, pct: 12.3, color: "#E91E8C", trend: "stable" },
  { name: "Other", amount: 400, pct: 5.0, color: "#4A9EFF", trend: "down" },
];

export function AnalyticsPage() {
  const [period, setPeriod] = useState("month");
  const maxVal = Math.max(...monthlyData.map(d => Math.max(d.income, d.expenses)));

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">AI-powered spending insights</p>
        </div>
        <div className="flex gap-1 p-1 rounded-xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
          {["week", "month", "year"].map(p => (
            <button key={p} onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${period === p ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Total Income", value: "$42,750", change: "+8.2%", positive: true, color: "#00D4AA" },
          { label: "Total Expenses", value: "$8,139", change: "-15.3%", positive: true, color: "#FFD700" },
          { label: "Net Savings", value: "$34,611", change: "+12.4%", positive: true, color: "#C4A1FF" },
          { label: "Savings Rate", value: "81%", change: "+3pp", positive: true, color: "#FF8C42" },
        ].map(s => (
          <div key={s.label} className="p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
            <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
            <p className="text-xl font-bold mb-1">{s.value}</p>
            <span className="text-[10px] flex items-center gap-0.5"
              style={{ color: s.positive ? "#00D4AA" : "#FF4444" }}>
              {s.positive ? <ArrowUp className="size-2.5" /> : <ArrowDown className="size-2.5" />}
              {s.change}
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="p-5 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-semibold">Income vs Expenses</h3>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-2 rounded-full" style={{ backgroundColor: "#00D4AA" }} /> Income
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-2 rounded-full" style={{ backgroundColor: "#FFD700" }} /> Expenses
            </span>
          </div>
        </div>
        <div className="flex items-end gap-4 h-48">
          {monthlyData.map(d => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex gap-1 items-end justify-center" style={{ height: "180px" }}>
                <div className="w-5 rounded-t-sm transition-all"
                  style={{ height: `${(d.income / maxVal) * 160}px`, backgroundColor: "#00D4AA" }} />
                <div className="w-5 rounded-t-sm transition-all"
                  style={{ height: `${(d.expenses / maxVal) * 160}px`, backgroundColor: "#FFD700" }} />
              </div>
              <span className="text-[10px] text-muted-foreground">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="p-5 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
        <h3 className="text-sm font-semibold mb-4">Spending by Category</h3>

        {/* Bar visualization */}
        <div className="flex h-3 rounded-full overflow-hidden mb-4">
          {categories.map(c => (
            <div key={c.name} className="h-full transition-all" style={{ width: `${c.pct}%`, backgroundColor: c.color }} />
          ))}
        </div>

        <div className="space-y-2">
          {categories.map(c => (
            <div key={c.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.03] transition-colors">
              <div className="size-3 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
              <span className="text-sm flex-1">{c.name}</span>
              <span className="text-sm font-semibold tabular-nums">${c.amount.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground w-12 text-right">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="p-5 rounded-2xl border border-[rgba(255,255,255,0.06)]"
        style={{ background: "linear-gradient(135deg, rgba(255,215,0,0.05) 0%, rgba(0,212,170,0.05) 100%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="size-4" style={{ color: "#FFD700" }} />
          <h3 className="text-sm font-semibold">AI Financial Insights</h3>
        </div>
        <div className="space-y-3">
          {[
            "Your savings rate of 81% is exceptional — well above the recommended 20% benchmark.",
            "Real estate spending dominates at 52%. Consider diversifying with automated recurring investments.",
            "Technology costs decreased 15% month-over-month. Annual billing could save an additional 20%.",
          ].map((insight, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-xs text-muted-foreground mt-0.5">·</span>
              <p className="text-sm text-muted-foreground">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
