export const getArrayNumbers = (length: number = 3): number[] =>
  Array.from({ length }).map((_, index) => index + 1);
