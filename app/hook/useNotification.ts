import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

interface Notification {
  success: boolean;
  message: string;
}
export const useNotification = (notification: Notification | null) => {

  const { toast } = useToast()
  useEffect(() => {
    if (notification) {
      if (!notification.success) {
        toast({
          title: "Error",
          description: notification.message,
          variant: "destructive",
        });
      }
    }
  }, [notification, toast]);
};
