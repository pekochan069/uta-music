import {
  bigint,
  char,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

import { channel } from ".";

export const agency = mysqlTable("agency", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  public_id: char("public_id", { length: 16 }).notNull(),
  name_jp: text("name_jp"),
  name_en: text("name_en"),
  name_kr: text("name_kr"),
  default_lang: char("default_lang", { length: 2 }).notNull(),
  x_handle: varchar("x_handle", { length: 64 }).notNull(),
  website: text("website"),
  channel_id: bigint("channel_id", { mode: "bigint" })
    .notNull()
    .references(() => channel.id),
});
