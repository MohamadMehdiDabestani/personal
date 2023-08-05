export const equals3 = (a: string, b: string, c: string) =>
  a === b && b === c && a !== '';
export const max = (array: number[]) =>
  array.sort((a, b) => a - b)[array.length - 1];

export const min = (array: number[]) =>
  array.sort((a, b) => b - a)[array.length - 1];
