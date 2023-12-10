import { bigint, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const channel = mysqlTable("channel", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  channel_id: varchar("channel_id", { length: 64 }).notNull(),
  channel_name: text("channel_name").notNull(),
  channel_handle: text("channel_handle").notNull(),
});
