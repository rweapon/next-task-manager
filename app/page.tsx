"use client";

import { useState, useCallback } from "react";
import { Task, Filter, Notifications, TaskFormValues } from "./types";
import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { Modal } from "./components/widgets/Modal";
import { TaskList } from "./components/widgets/TaskList";
import { Notification } from "./components/Notification";
import { PageActions } from "@/app/components/widgets/PageActions";

export default function Home() {
  const { tasks, addTask, deleteTask, toggleTask, updateTask } = useTasks();
  const [filter, setFilter] = useState<Filter>(Filter.all);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [notification, setNotification] = useState<Notifications>(Notifications.NULL);

  const showNotification = useCallback((message: Notifications) => {
    setNotification(message);
    setTimeout(() => setNotification(Notifications.NULL), 2000);
  }, []);

  const handleAddTask = useCallback(
    (data: TaskFormValues) => {
      addTask({ ...data, completed: false });
      setIsAddModalOpen(false);
      showNotification(Notifications.ADD);
    },
    [addTask, showNotification]
  );

  const handleEditTask = useCallback(
    (data: TaskFormValues) => {
      if (editingTask) {
        updateTask(editingTask.id, data);
        setEditingTask(null);
        showNotification(Notifications.EDIT);
      }
    },
    [editingTask, updateTask, showNotification]
  );

  const handleDelete = useCallback(
    (id: string) => {
      deleteTask(id);
      showNotification(Notifications.DELETE);
    },
    [deleteTask, showNotification]
  );

  const handleFilterChange = useCallback((newFilter: Filter) => {
    setFilter(newFilter);
  }, []);

  return (
    <main className="space-y-8">
      <PageActions
        filter={filter}
        onFilterChange={handleFilterChange}
        onOpenModal={() => setIsAddModalOpen(true)}
      />

      <TaskList tasks={tasks} filter={filter} onToggle={toggleTask} onDelete={handleDelete} onEdit={setEditingTask} />

      <Modal isOpen={isAddModalOpen} onCloseModal={() => setIsAddModalOpen(false)} title="Добавить новую задачу">
        <TaskForm onSubmit={handleAddTask} />
      </Modal>

      <Modal isOpen={!!editingTask} onCloseModal={() => setEditingTask(null)} title="Изменить задачу">
        {editingTask && (
          <TaskForm
            onSubmit={handleEditTask}
            initialValues={{
              title: editingTask.title,
              description: editingTask.description,
              priority: editingTask.priority,
            }}
          />
        )}
      </Modal>

      {notification && <Notification message={notification} />}
    </main>
  );
}
