import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosError } from "axios";
import Assign from "@repositories/assign";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { getErrorMessage } from "@utils/error-message";

export const useDeleteAssignMutation = (slug: string, cb?: () => void) => {
  const queryClient = useQueryClient();
  const url = `${API_ENDPOINTS.ASSIGNS}/${slug}`;
  return useMutation(() => Assign.remove(url), {
    onSuccess: () => {
      message.success("Assign deleted successfully");
      typeof cb === "function" && cb();
    },
    onError: (error: AxiosError) => {
      const msg = getErrorMessage(error);
      message.error(msg);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([API_ENDPOINTS.ASSIGNS]);
    },
  });
};
