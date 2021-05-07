import { setToLocalStorage, getFromLocalStorage } from "utils/storage";

export const randomSample = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export const random = (start: number, end: number) =>
  start + Math.floor(Math.random() * end);

export type GetSeedsProps<
  Type,
  Uniques extends UtilityTypes.PartialExact<Type, Uniques>
> = {
  uniques: Uniques[];
  creator: (index?: number) => UtilityTypes.ExcludingTypes<Type, Uniques>;
};

export type GetSeedsMapProps<
  Type,
  Uniques extends UtilityTypes.PartialExact<Type, Uniques>
> = GetSeedsProps<Type, Uniques> & {
  keyGenerator: (item: Type) => string;
};

export const getSeeds = <
  Type,
  Uniques extends UtilityTypes.PartialExact<Type, Uniques>
>(
  uniques: Uniques[],
  creator: (index?: number) => UtilityTypes.ExcludingTypes<Type, Uniques>,
  useLocalStorage: boolean
): Type[] => {
  if (useLocalStorage && getFromLocalStorage("seeds")) {
    return getFromLocalStorage("seeds");
  } else {
    const seeds = Array<Type>();
    uniques.forEach((item, index) => {
      seeds.push({ ...item, ...creator(index) });
    });
    if (useLocalStorage) setToLocalStorage("seeds", seeds);
    return seeds;
  }
};

export const getSeedsMap = <
  Type,
  Uniques extends UtilityTypes.PartialExact<Type, Uniques>
>(
  uniques: Uniques[],
  creator: (index?: number) => UtilityTypes.ExcludingTypes<Type, Uniques>,
  keyGenerator: (item: Type) => string,
  useLocalStorage: boolean
): Record<string, Type> => {
  if (useLocalStorage && getFromLocalStorage("seeds")) {
    return getFromLocalStorage("seeds");
  } else {
    const seeds: Record<string, Type> = {};
    uniques.forEach((uItem, index) => {
      const item = { ...uItem, ...creator(index) };
      seeds[keyGenerator(item)] = item;
    });
    if (useLocalStorage) setToLocalStorage("seeds", seeds);
    return seeds;
  }
};
