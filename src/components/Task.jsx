import classNames from 'classnames'
import { TrashIcon } from '@heroicons/react/24/solid'

import './Task.css'
import { useStore } from '../store'



export default function Task({ title, state }) {
  const deleteTask = useStore((store) => store.deleteTask)

  const handleOnClick = () => deleteTask(title, state) 

  return (
    <div className="bg-slate-900 rounded text-white flex flex-col justify-between max-h-20 p-2 gap-2">
      <header className="flex justify-between">
        <h4>{ title }</h4>
        <button onClick={handleOnClick}><TrashIcon className="w-6 h-6 text-slate-950" /></button>
      </header>
      <div className="flex justify-end">
        <span className={classNames("status", state)}>{ state }</span>
      </div>
    </div>
  )
}