
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'week3-task-manager-tasks';

const getInitialTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    // Return an empty list if saved tasks cannot be loaded.
    return [];
  }
};

export default function useTasks() {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // Saving may fail if browser storage is unavailable.
    }
  }, [tasks]);

  const addTask = (title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: trimmedTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const clearCompleted = () => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  };

  return { tasks, addTask, toggleTask, deleteTask, clearCompleted };
}
