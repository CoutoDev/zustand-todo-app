import { create } from "zustand"

const TASK_STATE = {
  PLANNED: 'PLANNED',
  ONGOING: 'ONGOING',
  DONE: 'DONE'
}

const store = (set) => ({
  tasks: [
    {
      title: "Test Task",
      state: TASK_STATE.PLANNED
    },
    {
      title: "Test Task",
      state: TASK_STATE.PLANNED
    },
    {
      title: "Test Task",
      state: TASK_STATE.PLANNED
    },
    {
      title: "Test Task",
      state: TASK_STATE.PLANNED
    },
    {
      title: "Test Task 2",
      state: TASK_STATE.ONGOING
    },
    {
      title: "Test Task 2",
      state: TASK_STATE.ONGOING
    },
    {
      title: "Test Task 2",
      state: TASK_STATE.ONGOING
    },
    {
      title: "Test Task 2",
      state: TASK_STATE.ONGOING
    },
    {
      title: "Test Task 2",
      state: TASK_STATE.ONGOING
    },
    {
      title: "Test Task 3",
      state: TASK_STATE.DONE
    },
  ],
  addTask: (title, state) => set((store) => ({ tasks: [...store.tasks, {title, state}]}))
})

export { TASK_STATE }

export const useStore = create(store);