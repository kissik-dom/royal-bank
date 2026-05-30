import { Copy, Crown, Eye, EyeOff, Lock, Plus, Settings, Snowflake } from "lucide-react";
import { useState } from "react";

const recentCardTx = [
  { name: "Sotheby's International", amount: -4250, date: "May 28", icon: "🏠" },
  { name: "Vercel Pro Plan", amount: -240, date: "May 22", icon: "🌐" },
  { name: "Convex Cloud", amount: -25, date: "May 20", icon: "☁️" },
  { name: "Domain Registration", amount: -89, date: "May 18", icon: "🔗" },
];

export function CardsPage() {
  const [showNumber, setShowNumber] = useState(false);
  const [frozen, setFrozen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Cards</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your Royal debit and virtual cards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Visual */}
        <div className="space-y-4">
          <div className={`aspect-[1.586/1] max-w-sm rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all ${frozen ? "opacity-60 grayscale" : ""}`}
            style={{ background: "linear-gradient(135deg, #FFD700 0%, #E0BD00 40%, #B8860B 100%)" }}>
            {frozen && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl z-10">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Snowflake className="size-5" /> Card Frozen
                </div>
              </div>
            )}
            <div className="flex items-center justify-between">
              <Crown className="size-7" style={{ color: "#0A0A0F" }} />
              <span className="text-xs font-semibold tracking-widest" style={{ color: "#0A0A0F" }}>ROYAL VISA</span>
            </div>
            <div>
              <p className="text-base font-mono tracking-[0.2em] mb-3" style={{ color: "#0A0A0F" }}>
                {showNumber ? "4291 8832 1057 4291" : "•••• •••• •••• 4291"}
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(10,10,15,0.5)" }}>Card Holder</p>
                  <p className="text-xs font-semibold" style={{ color: "#0A0A0F" }}>NINKROYAL</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(10,10,15,0.5)" }}>Expires</p>
                  <p className="text-xs font-semibold" style={{ color: "#0A0A0F" }}>12/29</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Actions */}
          <div className="grid grid-cols-4 gap-2 max-w-sm">
            {[
              { label: "Show", icon: showNumber ? EyeOff : Eye, action: () => setShowNumber(!showNumber) },
              { label: "Copy", icon: Copy, action: () => {} },
              { label: frozen ? "Unfreeze" : "Freeze", icon: frozen ? Snowflake : Lock, action: () => setFrozen(!frozen) },
              { label: "Settings", icon: Settings, action: () => {} },
            ].map(act => (
              <button key={act.label} onClick={act.action}
                className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <act.icon className="size-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{act.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
            <h3 className="text-sm font-semibold mb-3">Card Details</h3>
            <div className="space-y-3">
              {[
                ["Status", frozen ? "Frozen" : "Active"],
                ["Card Type", "Virtual Debit"],
                ["Network", "Visa"],
                ["Daily Limit", "$50,000"],
                ["Monthly Limit", "$500,000"],
                ["International", "Enabled"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="text-xs font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
            <h3 className="text-sm font-semibold mb-3">Spending This Month</h3>
            <p className="text-2xl font-bold mb-1">$4,604.00</p>
            <div className="h-2 rounded-full bg-[#1A1A24] overflow-hidden mb-2">
              <div className="h-full rounded-full" style={{ width: "9.2%", backgroundColor: "#FFD700" }} />
            </div>
            <p className="text-xs text-muted-foreground">$4,604 of $50,000 monthly limit</p>
          </div>
        </div>
      </div>

      {/* Recent Card Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recent Card Transactions</h2>
        <div className="space-y-1">
          {recentCardTx.map(tx => (
            <div key={tx.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className="size-10 rounded-full bg-[#1A1A24] flex items-center justify-center text-lg flex-shrink-0">
                {tx.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{tx.name}</p>
                <p className="text-xs text-muted-foreground">{tx.date} · Card ••4291</p>
              </div>
              <span className="text-sm font-semibold tabular-nums">
                -${Math.abs(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add Card */}
      <button className="w-full p-4 rounded-2xl border border-dashed border-[rgba(255,255,255,0.12)] hover:border-[#FFD700]/40 transition-colors flex items-center justify-center gap-2 text-muted-foreground hover:text-white">
        <Plus className="size-4" />
        <span className="text-sm">Add Virtual Card</span>
      </button>
    </div>
  );
}
