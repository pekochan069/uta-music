import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL!,
    // user: process.env.DATABASE_USERNAME!,
    // password: process.env.DATABASE_PASSWORD!,
    // host: process.env.DATABASE_HOST!,
    // database: process.env.DATABASE!,
  },
} satisfies Config;
