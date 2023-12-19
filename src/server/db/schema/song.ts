import { relations } from "drizzle-orm";
import { bigint, char, index, mysqlTable, text } from "drizzle-orm/mysql-core";

import { songParticipants, utaSongs, video } from ".";

export const song = mysqlTable(
  "song",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    publicId: char("public_id", { length: 16 }).notNull().unique(),
    nameJp: text("name_jp"),
    nameEn: text("name_en"),
    nameKo: text("name_ko"),
    defaultLang: char("default_lang", { length: 2 }).notNull(),
    videoId: bigint("video_id", { mode: "bigint" }),
  },
  (table) => {
    return {
      videoIdx: index("video_idx").on(table.videoId),
    };
  },
);

export const songRelations = relations(song, ({ one, many }) => ({
  video: one(video, {
    fields: [song.videoId],
    references: [video.id],
  }),
  utaSongs: many(utaSongs),
  songParticipants: many(songParticipants),
}));
