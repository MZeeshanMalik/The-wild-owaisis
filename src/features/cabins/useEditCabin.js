import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = new QueryClient();

  const { mutate: editCabin, isLoading: idEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin sucessfully updated"),
        queryClient.invalidateQueries({
          queryKey: ["cabin"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabin, idEditing };
}
