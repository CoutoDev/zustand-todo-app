import { useShallow } from 'zustand/react/shallow'
import { PlusCircleIcon } from "@heroicons/react/24/outline"

import { TASK_STATE, useStore } from '../store'
import Task from './Task'

export default function Column({ state }) {
  const tasks =  useStore(
    useShallow((store) => 
      store.tasks
        .filter(task => task.state === state)
    )
  );

  return (
    <section className="bg-slate-800 rounded text-white mx-2 max-w-xs min-h-[20rem] p-2 w-1/3 flex flex-col justify-between gap-2">
      <div className="max-h-64 overflow-y-auto flex flex-col gap-2 p-1">
        {tasks.map((task, index) => 
          <Task title={task.title} key={`${task.title.trim()}-${index}`} />
        )}
      </div>
      {state === TASK_STATE.PLANNED && (
        <button className="bg-slate-900 p-2 w-full h-10 rounded flex gap-2">
          <PlusCircleIcon className="text-white w-6 h-6" />
          <span>Adicionar nova tarefa</span>
        </button>
      )}
    </section>
  )
}