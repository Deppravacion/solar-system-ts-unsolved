export const minBy = <T, U>(
  array: T[],
  cb: (element: T) => U
): T | undefined => {
  if (!array[0]) return;
  let temp: T = array[0];
  if (array.length) {
    for (let element of array) {
      if (cb(temp) > cb(element)) {
        temp = element;
      }
    }
    return temp;
  } else {
    return undefined;
  }
};

export function maxBy<T>(
  array: T[],
  cb: (element: T) => string | number
): T | undefined {
  if (!array[0]) return;
  let temp: T = array[0];
  if (array.length) {
    for (let element of array) {
      if (temp !== undefined && cb(temp) < cb(element)) {
        temp = element;
      }
    }
    return temp;
  } else {
    return undefined;
  }
}
