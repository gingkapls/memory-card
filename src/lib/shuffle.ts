function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  copy.forEach((_, i, array) => {
    const randomIndex = Math.floor(Math.random() * (copy.length - 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  });

  return copy;
}

export default shuffle;