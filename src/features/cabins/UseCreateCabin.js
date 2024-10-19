import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClint = useQueryClient();
  const { mutate: createCabin, isLoading } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New Cabin created"),
        queryClint.invalidateQueries({
          queryKey: ["cabin"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createCabin, isLoading };
}
