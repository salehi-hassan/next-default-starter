import { dropRight, findIndex, isEqual } from "lodash";

export function dropRightAll<T>(arrayList: Array<T[]>, dropCount: number) {
  return arrayList.reduce((acc, arr) => {
    const droppedRightArray = dropRight<T>(arr, dropCount);
    if (droppedRightArray.length > 0) acc.push(droppedRightArray);
    return acc;
  }, [] as Array<T[]>);
}

export function includes<T>(arr: Array<T>, obj: T) {
  return findIndex(arr, (thisObj) => isEqual(thisObj, obj)) !== -1;
}
