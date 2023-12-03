import { bigserial, pgTable, varchar } from "drizzle-orm/pg-core";

export const youtubeVideo = pgTable("youtube_video", {
  id: bigserial("id", { mode: "bigint" }).primaryKey(),
  video_id: varchar("video_id", { length: 24 }).notNull(),
  type: varchar("type", { length: 32 }).notNull(),
});
