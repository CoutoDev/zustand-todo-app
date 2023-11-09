import { create } from "zustand"
import { persist, devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

const TASK_STATE = {
  PLANNED: 'PLANNED',
  ONGOING: 'ONGOING',
  DONE: 'DONE'
}

const store = (set) => ({
  tasks: [],
  draggedTaskId: null,
  addTask: (title, state) => set((store) => ({ tasks: [...store.tasks, { id: uuidv4(), title, state }] }), false, "addTask"),
  deleteTask: (taskId) => set((store) => ({ tasks: store.tasks.filter(task => task.id !== taskId) }), false, "deleteTask"),
  editTask: (taskId, title) => set((store) => ({
    tasks: store.tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          title,
        }
      }

      return { ...task }
    })
  }), false, "editTask"),
  setDraggedTaskId: (taskId) => set({
    draggedTaskId: taskId
  }, false, "setDraggedTaskId"),
  moveTask: (taskId, state) => set((store) => ({
    tasks: store.tasks.map((task) => task.id === taskId ? {
      ...task,
      state
    } : task)
  }), false, "moveTask")
})

export { TASK_STATE }

export const useStore = create(
  devtools(
    persist(store, {
      name: 'tasks'
    })
  )
)