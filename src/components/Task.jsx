import classNames from 'classnames'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'

import './Task.css'
import { useStore } from '../store'
import Modal from './Modal'
import { useRef, useState } from 'react'



export default function Task({ taskId, title, state }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const inputRef = useRef(null)
  const deleteTask = useStore((store) => store.deleteTask)
  const editTask = useStore((store) => store.editTask)

  const handleOnDeleteIconClick = () => deleteTask(taskId) 
  const handleOnEditIconClick = () => {
    setIsModalOpen(true);
  } 
  const handleEditTaskClick = () => {
    editTask(taskId, inputRef.current.value);
    setIsModalOpen(false);
  }
  const handleOnCloseModal = () => setIsModalOpen(false)

  return (
    <section className="bg-slate-900 rounded text-white flex flex-col justify-between max-h-20 p-2 gap-2">
      <header className="flex justify-between">
        <h4>{ title }</h4>
        <button onClick={handleOnDeleteIconClick}><TrashIcon className="w-6 h-6 text-slate-950" /></button>
        <button onClick={handleOnEditIconClick}><PencilIcon className="w-6 h-6 text-slate-950" /></button>
      </header>
      <div className="flex justify-end">
        <span className={classNames("status", state)}>{ state }</span>
      </div>
      <Modal
        isOpen={isModalOpen}
        onModalClose={handleOnCloseModal}
        title="Editar tarefa"
      >
        <input className="rounded p-2 focus:outline-none" name="taskName" type="text" ref={inputRef} defaultValue={title} />
        <button className="bg-slate-900 p-2 w-full h-10 rounded text-center text-slate-200 font-semibold" onClick={handleEditTaskClick}>
        Editar
        </button>
      </Modal>
    </section>
  )
}