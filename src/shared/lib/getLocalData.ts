function getLocalData<T>(field: string): T {
  const data: string | null = localStorage.getItem(field)! as string;
  return JSON.parse(data);
};

export default getLocalData;