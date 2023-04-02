import { QueryParamsType } from "@ts-types/custom.types";
import { useQuery } from "@tanstack/react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { Book as TBook } from "@ts-types/generated";

const fetchBookRecords = async ({ queryKey }: QueryParamsType) => {
  const url = API_ENDPOINTS.USERS;
  const { data } = await User.records(url);
  return data;
};

const useBookRecordsQuery = () => {
  return useQuery<
    {
      status: number;
      data: TBook[];
    },
    Error
  >([API_ENDPOINTS.BOOKS], fetchBookRecords, {
    refetchOnWindowFocus: false,
  });
};

export { useBookRecordsQuery, fetchBookRecords };
