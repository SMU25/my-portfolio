export const getTruncateString = (
  str: string,
  maxLength: number,
  isDisabled?: boolean
) =>
  !isDisabled && str?.length > maxLength
    ? `${str.slice(0, maxLength)}...`
    : str;
