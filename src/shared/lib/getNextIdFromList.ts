function getNextIdFromList<T extends { id: number }>(list: T[]): number {
  const idsList: number[] = list.map((item: T) => item.id);
  return Math.max(...idsList) + 1;
}

export default getNextIdFromList;