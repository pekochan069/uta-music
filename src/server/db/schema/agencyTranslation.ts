import {
  bigint,
  bigserial,
  boolean,
  char,
  pgTable,
  text,
} from "drizzle-orm/pg-core";

import { agency, lang } from ".";

export const agencyTranslation = pgTable("agency_translation", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  agency_id: bigint("agency_id", { mode: "bigint" })
    .references(() => agency.id)
    .notNull(),
  lang_code: char("lang_code", { length: 2 })
    .references(() => lang.code)
    .notNull(),
  name: text("name").notNull(),
  default: boolean("default").notNull(),
});
