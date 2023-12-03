import {
  bigint,
  bigserial,
  boolean,
  char,
  pgTable,
  text,
} from "drizzle-orm/pg-core";

import { lang, vtuber } from ".";

export const vtuberTranslation = pgTable("vtuber_translation", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  vtuber_id: bigint("vtuber_id", { mode: "bigint" })
    .references(() => vtuber.id)
    .notNull(),
  lang_code: char("lang_code", { length: 2 })
    .references(() => lang.code)
    .notNull(),
  name: text("name").notNull(),
  default: boolean("default").notNull(),
});
