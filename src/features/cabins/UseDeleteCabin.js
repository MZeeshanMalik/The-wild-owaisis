import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
export function useDeleteCabin() {
  const queryClint = useQueryClient();
  const { isLoading, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Sucessfully Deleted");
      queryClint.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, deleteCabin };
}
