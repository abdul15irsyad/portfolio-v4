export const cleanNull = <T extends object>(object: T): Partial<T> => {
  const filteredEntries = Object.entries(object).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, value]) => value !== null,
  );
  return Object.fromEntries(filteredEntries) as Partial<T>;
};
