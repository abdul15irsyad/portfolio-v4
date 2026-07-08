export function paramCase(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function snakeCase(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

export function capitalizeEachWord(str: string) {
  return str?.replace(/\b[a-z]/g, (match) => match.toUpperCase());
}

export const capitalize = (
  str: string,
  { each }: { each: boolean } = { each: false },
) => {
  if (each) return str?.replace(/\b[a-z]/g, (match) => match.toUpperCase());
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};
