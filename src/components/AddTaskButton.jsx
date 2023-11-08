import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { useStore } from "../store"
import Modal from "./Modal"
import { useRef, useState } from "react"

const AddTaskButton = ({ state }) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const taskInputRef = useRef(null);
  const addTask = useStore((store) => store.addTask);
  
  const handleOnClose = () => setIsModalOpen(false);

  const handleOnClick = () => {
    setIsModalOpen(true);
  };

  const handleAddNewTask = () => {
    addTask(taskInputRef.current.value, state);
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={handleOnClick} className="bg-slate-900 p-2 w-full h-10 rounded flex gap-2">
        <PlusCircleIcon className="text-white w-6 h-6"/>
        <span>
          Adicionar nova tarefa
        </span>
      </button>
      <Modal
        isOpen={isModalOpen}
        onModalClose={handleOnClose}
        title="Adicionar nova tarefa"
      >
        <input className="rounded p-2 focus:outline-none" name="taskName" placeholder="Nome da Tarefa" type="text" ref={taskInputRef} />
        <button className="bg-slate-900 p-2 w-full h-10 rounded text-center text-slate-200 font-semibold" onClick={handleAddNewTask}>
          Adicionar
        </button>
      </Modal>
    </>
  );
};

export default AddTaskButton;