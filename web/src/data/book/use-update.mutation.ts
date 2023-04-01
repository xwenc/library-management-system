import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosError } from "axios";
import Book from "@repositories/book";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { BookInput as IBookInput } from "@ts-types/generated";
import { getErrorMessage } from "@utils/error-message";

export const useUpdateShopMutation = (slug: string, cb?: () => void) => {
  const queryClient = useQueryClient();
  const url = `${API_ENDPOINTS.BOOKS}/${slug}`;
  return useMutation((values: IBookInput) => Book.edit(url, values), {
    onSuccess: () => {
      message.success("Book updated successfully");
      typeof cb === "function" && cb();
    },
    onError: (error: AxiosError) => {
      const msg = getErrorMessage(error);
      message.error(msg);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([API_ENDPOINTS.BOOKS]);
    },
  });
};
