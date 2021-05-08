export const generatePosition = (divider: number, min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let i = -1;
  do {
    i = Math.floor(Math.random() * (max - min)) + min;
  } while (i % divider);
  return i;
};
