import { char, pgTable, varchar } from "drizzle-orm/pg-core";

export const lang = pgTable("lang", {
  code: char("id", { length: 2 }).primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
});
