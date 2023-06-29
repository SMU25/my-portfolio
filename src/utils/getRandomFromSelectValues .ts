export const getRandomFromSelectValues = (arr: string[]) => {
  const num = Math.ceil(Math.random() * arr.length - 1);

  return arr[num];
};
