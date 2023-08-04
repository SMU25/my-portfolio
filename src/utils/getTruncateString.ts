export const getTruncateString = (str: string, maxLength: number): string =>
  str?.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
