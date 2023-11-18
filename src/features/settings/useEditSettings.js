import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSettings() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editSettings } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: () => {
      toast.error("Could not updated new settings");
    },
  });

  return { isEditing, editSettings };
}
