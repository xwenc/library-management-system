import { QueryParamsType } from "@ts-types/custom.types";
import { useQuery } from "@tanstack/react-query";
import Assign from "@repositories/assign";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { Book as TBook } from "@ts-types/generated";

const fetchAssignRecords = async ({ queryKey }: QueryParamsType) => {
  const url = API_ENDPOINTS.ASSIGNS;
  const { data } = await Assign.records(url);
  return data;
};

const useAssignRecordsQuery = () => {
  return useQuery<TBook[], Error>([API_ENDPOINTS.BOOKS], fetchAssignRecords, {
    refetchOnWindowFocus: false,
  });
};

export { useAssignRecordsQuery, fetchAssignRecords };
