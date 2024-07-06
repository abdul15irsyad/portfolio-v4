import { randomInt } from './number.util';

export const random = <T>(array: T[]) => array[randomInt(0, array.length - 1)];

export const shuffle = <T>(array: T[]) => array.sort(() => Math.random() - 0.5);

export interface PaginatedArrayOptions {
  page?: number;
  limit?: number;
}

export const paginatedArray = <T>(
  array: T[],
  { page, limit }: PaginatedArrayOptions = {},
): T[] => {
  page = page ? (page < 1 ? 1 : page) : 1;
  limit = limit ? (limit < 1 ? 1 : limit) : 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return array.slice(startIndex, endIndex);
};

export const searchInArray = <T>(
  array: T[],
  { search, fields }: { search: string; fields: (keyof T)[] },
) => {
  const filteredArray = array.filter((data) =>
    fields
      .map(
        (field) =>
          `${data[field]}`.toLowerCase().indexOf(search.toLowerCase()) !== -1,
      )
      .includes(true),
  );
  return filteredArray;
};
