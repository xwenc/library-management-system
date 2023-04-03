import Book from "@repositories/book";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Book as TBook } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchBook = async (slug: string) => {
  const { data } = await Book.find(`${API_ENDPOINTS.BOOKS}/${slug}`);
  return data
};

export const useUserQuery = (
  slug: string,
  options?: UseQueryOptions<TBook, Error, TBook, QueryKey>
) => {
  return useQuery<TBook, Error>(
    [API_ENDPOINTS.BOOKS, slug],
    () => fetchBook(slug),
    options
  );
};
