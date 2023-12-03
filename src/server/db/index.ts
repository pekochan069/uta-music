import { drizzle } from "drizzle-orm/vercel-postgres";

import { getXataClient } from "./xata";

const xata = getXataClient();
const db = drizzle(xata);

export default db;
