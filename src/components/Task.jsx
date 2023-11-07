import classNames from 'classnames'
import './Task.css'
import { useStore } from '../store'
import { useShallow } from 'zustand/react/shallow'


export default function Task({ title }) {
  const task = useStore(
    useShallow((store) => store.tasks.find(task => task.title === title))
  );

  return (
    <div className="bg-slate-900 rounded text-white flex flex-col justify-between max-h-20 p-2">
      <div>{ task.title }</div>
      <div className="flex justify-between">
        <div></div>
        <div className={classNames("status", task.state)}>{ task.state }</div>
      </div>
    </div>
  )
}