export const cleanNull = <T extends object>(object: T): Partial<T> => {
  const filteredEntries = Object.entries(object).filter(
    ([_, value]) => value !== null,
  );
  return Object.fromEntries(filteredEntries) as Partial<T>;
};
