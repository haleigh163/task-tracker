import { useState, createContext } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  return (
    <TasksContext.Provider
      value={{
        tasks: [
          {
            id: "task1",
            title: "Task 1",
            description: "This is the task description...",
            createdAt: new Date().toISOString(),
          },
          {
            id: "task2",
            title: "Task 2",
            description: "This is the task description...",
            createdAt: new Date().toISOString(),
          },
        ],
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
