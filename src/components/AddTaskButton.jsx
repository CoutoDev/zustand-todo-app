import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { useStore } from "../store"

const AddTaskButton = ({ state }) => {
  const addTask = useStore((store) => store.addTask);
  const handleOnClick = () => addTask(`test-${state}`, state) 

  return (
    <button onClick={handleOnClick} className="bg-slate-900 p-2 w-full h-10 rounded flex gap-2">
      <PlusCircleIcon className="text-white w-6 h-6" />
      <span>Adicionar nova tarefa</span>
    </button>
  );
};
 
export default AddTaskButton;