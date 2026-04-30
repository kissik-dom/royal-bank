import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  accounts: defineTable({
    userId: v.id("users"),
    name: v.string(),
    type: v.string(),
    balance: v.number(),
    currency: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"]),
  transactions: defineTable({
    accountId: v.id("accounts"),
    type: v.string(),
    amount: v.number(),
    description: v.string(),
    category: v.string(),
    createdAt: v.number(),
  })
    .index("by_account", ["accountId", "createdAt"]),
});

export default schema;
