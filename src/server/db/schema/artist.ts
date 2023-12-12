import { relations } from "drizzle-orm";
import { bigint, char, mysqlTable, text } from "drizzle-orm/mysql-core";

import {
  composer,
  singer,
  songParticipants,
  utaParticipants,
  vocaloid,
  vtuber,
} from ".";

export const artist = mysqlTable("artist", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  publicId: char("public_id", { length: 16 }).notNull().unique(),
  nameJp: text("name_jp"),
  nameEn: text("name_en"),
  nameKr: text("name_kr"),
  defaultLang: char("default_lang", { length: 2 }).notNull(),
});

export const artistRelations = relations(artist, ({ many }) => ({
  vtuber: many(vtuber),
  composer: many(composer),
  vocaloid: many(vocaloid),
  singer: many(singer),
  utaParticipants: many(utaParticipants),
  songParticipants: many(songParticipants),
}));
