import User from "@repositories/user";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { User as TUser } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export const fetchUser = async (slug: string) => {
  const { data } = await User.find(`${API_ENDPOINTS.USERS}/${slug}`);
  return data
};

export const useUserQuery = (
  slug: string,
  options?: UseQueryOptions<TUser, Error, TUser, QueryKey>
) => {
  return useQuery<TUser, Error>(
    [API_ENDPOINTS.USERS, slug],
    () => fetchUser(slug),
    options
  );
};
