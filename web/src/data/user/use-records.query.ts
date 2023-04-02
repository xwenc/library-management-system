import { QueryParamsType } from "@ts-types/custom.types";
import { useQuery } from "@tanstack/react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { User as TUser } from "@ts-types/generated";

const fetchUserRecords = async ({ queryKey }: QueryParamsType) => {
  const url = API_ENDPOINTS.USERS;
  const { data } = await User.records(url);
  return data;
};

const useUserRecordsQuery = () => {
  return useQuery<{
    status: number;
    data: TUser[];
  }, Error>([API_ENDPOINTS.USERS], fetchUserRecords, {
    refetchOnWindowFocus: false,
  });
};

export { useUserRecordsQuery, fetchUserRecords };
