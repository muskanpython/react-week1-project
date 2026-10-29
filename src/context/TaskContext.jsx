
import { createContext, useContext } from 'react';
import useTasks from '../hooks/useTasks';

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const taskManager = useTasks();

  return (
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      'useTaskContext must be used inside TaskProvider'
    );
  }

  return context;
}
