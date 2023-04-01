import { UserInput } from "@ts-types/generated";
import { useMutation } from "@tanstack/react-query";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IUserVariables {
  variables: UserInput;
}

export const useUserCreateMutation = () => {
  return useMutation(({ variables }: IUserVariables) =>
    User.new(API_ENDPOINTS.USERS, variables)
  );
};
