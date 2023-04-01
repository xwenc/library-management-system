import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { AxiosError } from "axios";
import User from "@repositories/user";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { UserInput as IUserInput } from "@ts-types/generated";
import { getErrorMessage } from "@utils/error-message";

export const useUpdateShopMutation = (slug: string, cb?: () => void) => {
  const queryClient = useQueryClient();
  const url = `${API_ENDPOINTS.USERS}/${slug}`;
  return useMutation((values: IUserInput) => User.edit(url, values), {
    onSuccess: () => {
      message.success("User updated successfully");
      typeof cb === "function" && cb();
    },
    onError: (error: AxiosError) => {
      const msg = getErrorMessage(error);
      message.error(msg);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([API_ENDPOINTS.USERS]);
    },
  });
};
