import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosError } from "axios";
import Book from "@repositories/book";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { getErrorMessage } from "@utils/error-message";

export const useDeleteBookMutation = (slug: string, cb?: () => void) => {
  const queryClient = useQueryClient();
  const url = `${API_ENDPOINTS.BOOKS}/${slug}`;
  return useMutation(() => Book.remove(url), {
    onSuccess: () => {
      message.success("Book deleted successfully");
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
