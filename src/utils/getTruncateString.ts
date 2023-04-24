export const getTruncateString = (
  str: string,
  maxCountSymbols: number
): string =>
  str?.length > maxCountSymbols ? `${str.slice(0, maxCountSymbols)}...` : str;
