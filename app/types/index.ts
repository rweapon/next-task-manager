import { taskSchema } from "@/app/configs";
import { z } from "zod";

export enum Theme {
  light = "light",
  dark = "dark"
}

export enum Priority {
  low = "Низкий",
  medium = "Средний",
  high = "Высокий",
}

export enum Notifications {
  ADD = "add",
  EDIT = "edit",
  DELETE = "delete",
  NULL = ""
}

export enum Filter {
  all = 'Все',
  active = 'Активные',
  completed = 'Выполненные',
  priority = 'По приоритету'
};

export enum FormValue {
  title = "title",
  description = "description",
  priority = "priority"
}

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  priority: Priority;
}

export type NewTask = Omit<Task, 'id' | 'createdAt'>

export type TaskFormValues = z.infer<typeof taskSchema>;
