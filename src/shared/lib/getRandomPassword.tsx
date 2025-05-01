function getRandomPassword(length: number = 8): string {
  const SYMBOLS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-!%.';
  let result: string = '';
  for(let i = 0; i < length; i++) {
    result += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  }
  return result;
}

export default getRandomPassword;