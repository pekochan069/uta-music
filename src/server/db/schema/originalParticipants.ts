import { bigint, pgTable } from "drizzle-orm/pg-core";

import { vtuber } from ".";

export const original_participants = pgTable("original_participants", {
  original_id: bigint("original_id", { mode: "bigint" }).notNull(),
  vtuber_id: bigint("vtuber_id", { mode: "bigint" })
    .references(() => vtuber.id)
    .notNull(),
});
