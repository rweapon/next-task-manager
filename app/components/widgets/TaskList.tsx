"use client";

import { memo } from "react";
import { Task, Filter, Priority } from "@/app/types";
import { TaskItem } from "@/app/components/TaskItem";

type Props = {
  tasks: Task[];
  filter: Filter;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

const TaskList = memo(function TaskList({ tasks, filter, onToggle, onDelete, onEdit }: Props) {
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case Filter.active:
        return !task.completed;
      case Filter.completed:
        return task.completed;
      case Filter.priority:
        return task.priority === Priority.high;
      default:
        return true;
    }
  });

  return (
    <section className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
      {filteredTasks.length === 0 && <div className="text-center text-gray-500">Не было найдено задач</div>}
    </section>
  );
});

export default TaskList;
