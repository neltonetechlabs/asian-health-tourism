export const listNumber = (index: number): string => {
  const listCount = index+1;
  if (listCount < 10) {
    return `0${listCount}`;
  }
  return listCount.toString();
};
