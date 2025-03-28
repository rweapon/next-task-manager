import { FormValue, Notifications, Priority } from "@/app/types";
import { z } from "zod";


export const NotificationMessages: Record<Notifications, string | null> = {
  [Notifications.ADD]: "Задача успешно добавлена",
  [Notifications.EDIT]: "Задача успешно изменена",
  [Notifications.DELETE]: "Задача успешно удалена",
  [Notifications.NULL]: null
}

export const priorityColors: Record<Priority, string> = {
  [Priority.low]: "bg-blue-100 text-blue-800",
  [Priority.medium]: "bg-yellow-100 text-yellow-800",
  [Priority.high]: "bg-red-100 text-red-800",
} as const;

export const FormInputs: Record<FormValue, { label: string, placeholder: string }> = {
  [FormValue.title]: { label: "Название", placeholder: "Введите название задачи" },
  [FormValue.description]: { label: "Описание", placeholder: "Введите описание задачи" },
  [FormValue.priority]: { label: "Приоритет", placeholder: "" },
}

export const taskSchema = z.object({
  [FormValue.title]: z.string().min(1, "Необходимо указать название"),
  [FormValue.description]: z.string().min(1, "Необходимо указать описание"),
  [FormValue.priority]: z.nativeEnum(Priority),
});