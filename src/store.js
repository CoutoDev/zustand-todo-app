import { create } from "zustand"
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';

const TASK_STATE = {
  PLANNED: 'PLANNED',
  ONGOING: 'ONGOING',
  DONE: 'DONE'
}

const store = (set) => ({
  tasks: [],
  draggedTaskId: null,
  addTask: (title, state) => set((store) => ({ tasks: [...store.tasks, {id: uuidv4(), title, state}]})),
  deleteTask: (taskId) => set((store) => ({ tasks: store.tasks.filter(task => task.id !== taskId)})),
  editTask: (taskId, title) => set((store) => ({ tasks: store.tasks.map(task => {
    if(taskId === task.id) {
      return {
        ...task,
        title,
      }
    }

    return {...task}
  })})),
  setDraggedTaskId: (taskId) => set({
    draggedTaskId: taskId
  }),
  moveTask: (taskId, state) => set((store) => ({
    tasks: store.tasks.map((task) => task.id === taskId ? {
      ...task,
      state
    } : task)
  }))
})

export { TASK_STATE }

export const useStore = create(persist(store, {
  name: 'tasks'
}));