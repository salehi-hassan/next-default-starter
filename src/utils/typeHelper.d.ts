declare namespace UtilityTypes {
  type ExcludingTypes<T, U> = {
    [K in Exclude<keyof T, keyof U>]: T[K];
  };

  type IntersectingTypes<T, U> = {
    [K in Extract<keyof T, keyof U>]: T[K];
  };

  type PartialExact<T, U> = {
    [K in keyof U]: K extends keyof T ? T[K] : never;
  };
}
