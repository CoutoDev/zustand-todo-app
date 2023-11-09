import { useShallow } from 'zustand/react/shallow'

import { TASK_STATE, useStore } from '../store'
import Task from './Task'
import AddTaskButton from './AddTaskButton'
import classNames from 'classnames'
import { useState } from 'react'

export default function Column({ state }) {
  const tasks =  useStore(
    useShallow((store) => 
      store.tasks
        .filter(task => task.state === state)
    )
  );
  const setDraggedTaskId = useStore((store) => store.setDraggedTaskId)
  const draggedTaskId = useStore((store) => store.draggedTaskId)
  const moveTask = useStore((store) => store.moveTask)

  const [isDropping, setIsDropping] = useState(false)

  return (
    <section
      className={classNames("bg-slate-800 rounded text-white mx-2  min-h-[20rem] p-2 lg:w-1/3 w-full flex flex-col justify-between gap-2 border-2 border-dashed border-transparent", {"border-slate-400": isDropping})}
      onDragOver={(event) =>{
        event.preventDefault();
        setIsDropping(true)
      }}
      onDragLeave={(event) =>{
        event.preventDefault();
        setIsDropping(false)
      }}
      onDrop={() => {
        moveTask(draggedTaskId, state);
        setDraggedTaskId(null);
        setIsDropping(false)
      }}
    >
      <div className={`${state === TASK_STATE.PLANNED ? "max-h-64" : "max-h-72"} overflow-y-auto flex flex-col gap-2 p-1`}>
        {tasks.map((task) => 
          <Task taskId={task.id} title={task.title} state={task.state} key={`${task.id}`} />
        )}
      </div>
      <AddTaskButton state={state} />
    </section>
  )
}