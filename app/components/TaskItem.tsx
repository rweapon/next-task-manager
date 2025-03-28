"use client";

import { Task } from "@/app/types";
import { Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { memo } from "react";
import { priorityColors } from "@/app/configs";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

export const TaskItem = memo(function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  const { completed, createdAt, id, title, priority, description } = task;

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:ring-offset-gray-800"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold ${completed ? "line-through text-gray-500" : ""}`}>{title}</h3>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                {format(new Date(createdAt), "MMM d, yyyy")}
              </span>
              <span className={`rounded-full px-3 py-1 text-sm ${priorityColors[priority]}`}>{priority}</span>
            </div>
          </div>
          <p className={`mt-2 text-gray-600 dark:text-gray-300 ${completed ? "line-through" : ""}`}>{description}</p>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => onEdit(task)}
              className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(id)}
              className="inline-flex items-center rounded-md px-3 py-2 text-sm button--delete"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});
