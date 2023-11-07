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
      title: "Test Task 3",
      state: TASK_STATE.DONE
    },
  ]
})

export { TASK_STATE }

export const useStore = create(store);