// Generated by Xata Codegen 0.28.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "agency",
    columns: [
      { name: "public_id", type: "string", unique: true },
      { name: "name_jp", type: "text" },
      { name: "name_en", type: "text" },
      { name: "name_kr", type: "text" },
      {
        name: "default_lang",
        type: "string",
        notNull: true,
        defaultValue: "jp",
      },
      { name: "x_id", type: "text" },
      { name: "website", type: "text" },
      { name: "youtube_id", type: "string" },
      { name: "youtube_handle", type: "text" },
    ],
    revLinks: [{ column: "agency_id", table: "vtuber" }],
  },
  {
    name: "vtuber",
    columns: [
      { name: "public_id", type: "string", unique: true },
      { name: "youtube_id", type: "string" },
      { name: "youtube_handle", type: "text" },
      { name: "x_id", type: "text" },
      { name: "agency_id", type: "link", link: { table: "agency" } },
    ],
    revLinks: [
      { column: "vtuber_id", table: "cover_participants" },
      { column: "vtuber_id", table: "original_participants" },
    ],
  },
  {
    name: "song",
    columns: [
      { name: "video_id", type: "link", link: { table: "video" } },
      { name: "name_jp", type: "text" },
      { name: "name_en", type: "text" },
      { name: "name_kr", type: "text" },
      {
        name: "default_lang",
        type: "string",
        notNull: true,
        defaultValue: "jp",
      },
    ],
    revLinks: [
      { column: "song_id", table: "cover" },
      { column: "song_id", table: "original" },
    ],
  },
  {
    name: "video",
    columns: [
      { name: "video_id", type: "string" },
      { name: "type", type: "string" },
    ],
    revLinks: [
      { column: "video_id", table: "song" },
      { column: "video_id", table: "cover" },
    ],
  },
  {
    name: "cover",
    columns: [
      { name: "public_id", type: "string", unique: true },
      { name: "release_time", type: "datetime" },
      { name: "song_id", type: "link", link: { table: "song" } },
      { name: "video_id", type: "link", link: { table: "video" } },
    ],
    revLinks: [{ column: "cover_id", table: "cover_participants" }],
  },
  {
    name: "cover_participants",
    columns: [
      { name: "cover_id", type: "link", link: { table: "cover" } },
      { name: "vtuber_id", type: "link", link: { table: "vtuber" } },
    ],
  },
  {
    name: "original",
    columns: [
      { name: "public_id", type: "string", unique: true },
      { name: "release_time", type: "datetime" },
      { name: "song_id", type: "link", link: { table: "song" } },
    ],
    revLinks: [{ column: "original_id", table: "original_participants" }],
  },
  {
    name: "original_participants",
    columns: [
      { name: "original_id", type: "link", link: { table: "original" } },
      { name: "vtuber_id", type: "link", link: { table: "vtuber" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Agency = InferredTypes["agency"];
export type AgencyRecord = Agency & XataRecord;

export type Vtuber = InferredTypes["vtuber"];
export type VtuberRecord = Vtuber & XataRecord;

export type Song = InferredTypes["song"];
export type SongRecord = Song & XataRecord;

export type Video = InferredTypes["video"];
export type VideoRecord = Video & XataRecord;

export type Cover = InferredTypes["cover"];
export type CoverRecord = Cover & XataRecord;

export type CoverParticipants = InferredTypes["cover_participants"];
export type CoverParticipantsRecord = CoverParticipants & XataRecord;

export type Original = InferredTypes["original"];
export type OriginalRecord = Original & XataRecord;

export type OriginalParticipants = InferredTypes["original_participants"];
export type OriginalParticipantsRecord = OriginalParticipants & XataRecord;

export type DatabaseSchema = {
  agency: AgencyRecord;
  vtuber: VtuberRecord;
  song: SongRecord;
  video: VideoRecord;
  cover: CoverRecord;
  cover_participants: CoverParticipantsRecord;
  original: OriginalRecord;
  original_participants: OriginalParticipantsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://pekochan069-s-workspace-mrlc5p.ap-southeast-2.xata.sh/db/uta-music",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
