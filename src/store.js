import { create } from "zustand"

const TASK_STATE = {
  PLANNED: 'PLANNED',
  ONGOING: 'ONGOING',
  DONE: 'DONE'
}

const store = (set) => ({
  tasks: [],
  addTask: (title, state) => set((store) => ({ tasks: [...store.tasks, {title, state}]})),
  deleteTask: (title, state) => set((store) => ({ tasks: store.tasks.filter(task => task.title !== title && task.state !== state)}))
})

export { TASK_STATE }

export const useStore = create(store);