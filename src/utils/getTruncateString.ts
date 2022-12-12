export const getTruncateString = (str: string, maxCountSymbols: number) =>
  str.length > maxCountSymbols ? `${str.slice(0, maxCountSymbols)} ...` : str;
