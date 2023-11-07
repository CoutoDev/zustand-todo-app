import { useShallow } from 'zustand/react/shallow'

import { TASK_STATE, useStore } from '../store'
import Task from './Task'
import AddTaskButton from './AddTaskButton'

export default function Column({ state }) {
  const tasks =  useStore(
    useShallow((store) => 
      store.tasks
        .filter(task => task.state === state)
    )
  );

  return (
    <section className="bg-slate-800 rounded text-white mx-2  min-h-[20rem] p-2 lg:w-1/3 w-full flex flex-col justify-between gap-2">
      <div className={`${state === TASK_STATE.PLANNED ? "max-h-64" : "max-h-72"} overflow-y-auto flex flex-col gap-2 p-1`}>
        {tasks.map((task, index) => 
          <Task title={task.title} key={`${task.title.trim()}-${index}`} />
        )}
      </div>
      {state === TASK_STATE.PLANNED && (
        <AddTaskButton state={state} />
      )}
    </section>
  )
}