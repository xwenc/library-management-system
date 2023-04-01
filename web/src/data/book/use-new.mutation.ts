import { AssignInput } from "@ts-types/generated";
import { useMutation } from "@tanstack/react-query";
import Assign from "@repositories/assign";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IAssignVariables {
  variables: AssignInput;
}

export const useBookAssignMutation = () => {
  return useMutation(({ variables }: IAssignVariables) =>
  Assign.new(API_ENDPOINTS.ASSIGNS, variables)
  );
};
