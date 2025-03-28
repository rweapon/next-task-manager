import { NotificationMessages } from "@/app/configs";
import { Notifications } from "@/app/types";
import { memo } from "react";

type Props = { message: Notifications };

export const Notification = memo(function Notification({ message }: Props) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transform translate-y-0 opacity-100 transition-all duration-300">
      {NotificationMessages[message]}
    </div>
  );
});
