import { ArrowDownLeft, ArrowUpRight, Check, Clock, Crown, Search, Send, User } from "lucide-react";
import { useState } from "react";

const recentContacts = [
  { name: "Kingdom Treasury", initials: "KT", color: "#FFD700" },
  { name: "Sotheby's Intl", initials: "SI", color: "#C4A1FF" },
  { name: "Legal Department", initials: "LD", color: "#00D4AA" },
  { name: "Centillion Corp", initials: "CC", color: "#FF8C42" },
];

const transferHistory = [
  { id: 1, name: "Kingdom Treasury", amount: 25000, type: "received", status: "completed", date: "May 29, 2026" },
  { id: 2, name: "Property Escrow LLC", amount: 150000, type: "sent", status: "completed", date: "May 27, 2026" },
  { id: 3, name: "Royal Gazette Fund", amount: 5000, type: "sent", status: "pending", date: "May 26, 2026" },
  { id: 4, name: "Investment Account", amount: 50000, type: "sent", status: "completed", date: "May 24, 2026" },
  { id: 5, name: "Registry Revenue", amount: 12500, type: "received", status: "completed", date: "May 22, 2026" },
];

export function TransfersPage() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [tab, setTab] = useState<"send" | "history">("send");

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Transfers</h1>
        <p className="text-muted-foreground text-sm mt-1">Send and receive money instantly</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl bg-[#12121A] border border-[rgba(255,255,255,0.06)] w-fit">
        {(["send", "history"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"}`}>
            {t === "send" ? "Send Money" : "History"}
          </button>
        ))}
      </div>

      {tab === "send" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Send Form */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
              <h3 className="text-sm font-semibold mb-4">Send To</h3>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input type="text" placeholder="Name, email, or account number"
                  value={recipient} onChange={e => setRecipient(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1A24] border border-[rgba(255,255,255,0.06)] text-sm focus:outline-none focus:border-[#FFD700]/40 transition-colors" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Recent</p>
                {recentContacts.map(c => (
                  <button key={c.name} onClick={() => setRecipient(c.name)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-xl transition-colors ${recipient === c.name ? "bg-white/10" : "hover:bg-white/[0.03]"}`}>
                    <div className="size-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: `${c.color}20`, color: c.color }}>
                      {c.initials}
                    </div>
                    <span className="text-sm">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#12121A] border border-[rgba(255,255,255,0.06)]">
              <h3 className="text-sm font-semibold mb-4">Amount</h3>
              <div className="text-center py-4">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl text-muted-foreground">$</span>
                  <input type="text" placeholder="0.00" value={amount}
                    onChange={e => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="text-4xl font-bold bg-transparent text-center w-48 focus:outline-none" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Available: $847,250.00</p>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["100", "500", "1,000", "5,000"].map(v => (
                  <button key={v} onClick={() => setAmount(v.replace(",", ""))}
                    className="py-2 rounded-lg bg-[#1A1A24] text-xs text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                    ${v}
                  </button>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-xs text-muted-foreground">Note (optional)</label>
                <input type="text" placeholder="What's this for?"
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#1A1A24] border border-[rgba(255,255,255,0.06)] text-sm focus:outline-none focus:border-[#FFD700]/40 transition-colors" />
              </div>
              <button className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                style={{ backgroundColor: "#FFD700", color: "#0A0A0F" }}>
                <Send className="size-4" /> Send Money
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* History Tab */
        <div className="space-y-1">
          {transferHistory.map(tx => (
            <div key={tx.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
              <div className={`size-10 rounded-full flex items-center justify-center flex-shrink-0`}
                style={{ backgroundColor: tx.type === "received" ? "rgba(0,212,170,0.15)" : "rgba(255,215,0,0.15)" }}>
                {tx.type === "received"
                  ? <ArrowDownLeft className="size-5" style={{ color: "#00D4AA" }} />
                  : <ArrowUpRight className="size-5" style={{ color: "#FFD700" }} />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{tx.name}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold tabular-nums`}
                  style={{ color: tx.type === "received" ? "#00D4AA" : undefined }}>
                  {tx.type === "received" ? "+" : "-"}${tx.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
                <span className="text-[10px] flex items-center gap-1 justify-end"
                  style={{ color: tx.status === "pending" ? "#FFD700" : "rgba(255,255,255,0.35)" }}>
                  {tx.status === "pending" ? <Clock className="size-2.5" /> : <Check className="size-2.5" />}
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
