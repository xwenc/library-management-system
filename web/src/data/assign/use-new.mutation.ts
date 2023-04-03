import { AssignInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Assign from "@repositories/assign";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IAssignVariables {
  variables: AssignInput;
}

export const useAssignNewMutation = (cb?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables }: IAssignVariables) =>
      Assign.new(API_ENDPOINTS.ASSIGNS, variables),
    {
      onSuccess: () => {
        typeof cb === "function" && cb();
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries([API_ENDPOINTS.ASSIGNS]);
      },
    }
  );
};
