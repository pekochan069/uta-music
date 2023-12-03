import {
  bigint,
  bigserial,
  boolean,
  char,
  pgTable,
  text,
} from "drizzle-orm/pg-core";

import { lang, song } from ".";

export const songTranslation = pgTable("song_translation", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  song_id: bigint("song_id", { mode: "bigint" })
    .references(() => song.id)
    .notNull(),
  lang_code: char("lang_code", { length: 2 })
    .references(() => lang.code)
    .notNull(),
  name: text("name").notNull(),
  default: boolean("default").notNull(),
});
