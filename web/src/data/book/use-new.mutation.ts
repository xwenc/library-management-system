import { BookInput } from "@ts-types/generated";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Book from "@repositories/book";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IBookNewVariables {
  variables: BookInput;
}

export const useBookNewMutation = (cb?: () => void) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ variables }: IBookNewVariables) => Book.new(API_ENDPOINTS.BOOKS, variables),
    {
      onSuccess: () => {
        typeof cb === "function" && cb();
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries([API_ENDPOINTS.BOOKS]);
      },
    }
  );
};
