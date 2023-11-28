import { nanoid } from "nanoid";

export const createId = (length: number = 12) => {
  const id = nanoid(length);

  return id;
};
