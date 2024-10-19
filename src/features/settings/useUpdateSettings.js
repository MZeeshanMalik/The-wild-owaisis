import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import updateSetting from "../../services/apiSettings";

export default function useEditSetting() {
  const queryClient = new QueryClient();

  const { mutate: updateStting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Setting sucessfully updated"),
        queryClient.invalidateQueries({
          queryKey: ["settings"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateStting, isUpdating };
}
