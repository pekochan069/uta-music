import { relations } from "drizzle-orm";
import {
  bigint,
  char,
  index,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

import { channel, vtuber } from ".";

export const agency = mysqlTable(
  "agency",
  {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    publicId: char("public_id", { length: 16 }).notNull().unique(),
    nameJp: text("name_jp"),
    nameEn: text("name_en"),
    nameKr: text("name_kr"),
    defaultLang: char("default_lang", { length: 2 }).notNull(),
    xHandle: varchar("x_handle", { length: 64 }).notNull(),
    website: text("website"),
    channelId: bigint("channel_id", { mode: "bigint" }),
  },
  (table) => {
    return {
      channelIdx: index("channel_idx").on(table.channelId),
    };
  },
);

export const agencyRelations = relations(agency, ({ one, many }) => ({
  channel: one(channel, {
    fields: [agency.channelId],
    references: [channel.id],
  }),
  vtuber: many(vtuber),
}));
