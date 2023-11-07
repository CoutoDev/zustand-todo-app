import { useStore } from '../store'
import './Column.css'
import Task from './Task'
import { useShallow } from 'zustand/react/shallow'

export default function Column({ state }) {
  const tasks =  useStore(
    useShallow((store) => 
      store.tasks
        .filter(task => task.state === state)
    )
  );

  return (
    <div className="column">
      {tasks.map((task, index) => 
        <Task title={task.title} key={`${task.title.trim()}-${index}`} />
      )}
    </div>
  )
}