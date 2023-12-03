import { bigint, bigserial, char, pgTable, time } from "drizzle-orm/pg-core";

import { song, youtubeVideo } from ".";

export const cover = pgTable("cover", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  public_id: char("public_id", { length: 12 }).notNull(),
  release_time: time("release_time").notNull(),
  song_id: bigint("song_id", { mode: "bigint" })
    .references(() => song.id)
    .notNull(),
  youtube_video_id: bigint("video_id", { mode: "bigint" })
    .references(() => youtubeVideo.id)
    .notNull(),
});
