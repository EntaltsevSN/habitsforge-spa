function checkLocalData(field: string): boolean {
  return localStorage.getItem(field) !== null;
};

export default checkLocalData;