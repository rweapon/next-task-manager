'use client';

import { useCallback, useEffect, useState } from 'react';
import { NewTask, Task } from '../types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("tasks");
      if (data) {
        return JSON.parse(data);
      }
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task: NewTask) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }, []);

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    updateTask,
  } as const;
};