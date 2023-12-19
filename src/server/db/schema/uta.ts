import { relations } from "drizzle-orm";
import {
  bigint,
  char,
  index,
  mysqlTable,
  text,
  time,
  varchar,
} from "drizzle-orm/mysql-core";

import { utaParticipants, utaSongs, video } from ".";

export const uta = mysqlTable(
  "uta",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    publicId: char("public_id", { length: 16 }).notNull().unique(),
    type: varchar("type", { length: 64 }).notNull(),
    timestampStart: time("timestamp_start"),
    timestampEnd: time("timestamp_end"),
    title: text("title"),
    videoId: bigint("video_id", { mode: "bigint" }).notNull(),
  },
  (table) => {
    return {
      videoIdx: index("video_idx").on(table.videoId),
    };
  },
);

export const utaRelations = relations(uta, ({ one, many }) => ({
  video: one(video, {
    fields: [uta.videoId],
    references: [video.id],
  }),
  utaParticipants: many(utaParticipants),
  utaSongs: many(utaSongs),
}));
