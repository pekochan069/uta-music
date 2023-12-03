import { bigint, bigserial, pgTable } from "drizzle-orm/pg-core";

import { youtubeVideo } from ".";

export const song = pgTable("song", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  youtube_video_id: bigint("youtube_id", { mode: "bigint" })
    .references(() => youtubeVideo.id)
    .notNull(),
});
