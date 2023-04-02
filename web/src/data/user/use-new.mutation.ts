import { UserInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IUserVariables {
  variables: UserInput;
}

export const useUserCreateMutation = (cb?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables }: IUserVariables) => User.new(API_ENDPOINTS.USERS, variables),
    {
      onSuccess: () => {
        typeof cb === "function" && cb();
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries([API_ENDPOINTS.USERS]);
      },
    }
  );
};
