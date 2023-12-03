import { bigint, pgTable } from "drizzle-orm/pg-core";

import { vtuber } from ".";

export const coverParticipants = pgTable("cover_participants", {
  cover_id: bigint("cover_id", { mode: "bigint" }).notNull(),
  vtuber_id: bigint("vtuber_id", { mode: "bigint" })
    .references(() => vtuber.id)
    .notNull(),
});
