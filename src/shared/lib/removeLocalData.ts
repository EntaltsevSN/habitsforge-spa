function removeLocalData(field: string): void {
  localStorage.removeItem(field);
};

export default removeLocalData;