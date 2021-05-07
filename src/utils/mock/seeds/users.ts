import { User } from "types/Sample";
import { getSeeds } from "./helper";
import { date, email, ids, name } from "./models";

export const Users = (numOf: number) =>
  getSeeds<User, { id: string }>(
    ids(numOf),
    () => {
      return { name: name(), email: email(), createdAt: date() };
    },
    false
  );
