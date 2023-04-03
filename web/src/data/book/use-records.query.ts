import { QueryParamsType } from "@ts-types/custom.types";
import { useQuery } from "@tanstack/react-query";
import Book from "@repositories/book";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { Book as TBook } from "@ts-types/generated";

const fetchBookRecords = async ({ queryKey }: QueryParamsType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_key, params] = queryKey;
  const url = API_ENDPOINTS.BOOKS;
  const { data } = await Book.records(url, params as { type: string });
  return data;
};

const useBookRecordsQuery = (options?: { type: string }) => {
  return useQuery<
    {
      status: number;
      data: TBook[];
    },
    Error
  >([API_ENDPOINTS.BOOKS, options], fetchBookRecords, {
    refetchOnWindowFocus: false,
  });
};

export { useBookRecordsQuery, fetchBookRecords };
