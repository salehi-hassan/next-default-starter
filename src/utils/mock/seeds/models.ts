import faker from "faker";
import _ from "lodash";

export const id = () => faker.datatype.uuid();

export const ids = (numOf: number) => {
  return _.range(numOf).map(() => ({
    id: id(),
  }));
};

export const name = () => faker.name.findName();

export const email = () => faker.internet.email();

export const date = () => faker.date.recent().toISOString();
