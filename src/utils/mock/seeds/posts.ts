import faker from "faker";
import { Post } from "types/Sample";
import { getSeeds } from "./helper";
import { date, ids, name } from "./models";

export const Posts = (numOf: number) =>
  getSeeds<Post, { id: string }>(
    ids(numOf),
    () => {
      return {
        user: name(),
        title: faker.lorem.sentence(1, 3),
        body: faker.lorem.text(1),
        createdAt: date(),
      };
    },
    false
  );
