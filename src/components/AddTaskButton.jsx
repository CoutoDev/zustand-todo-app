import { PlusCircleIcon } from "@heroicons/react/24/outline"

const AddTaskButton = () => {
  return (
    <button className="bg-slate-900 p-2 w-full h-10 rounded flex gap-2">
      <PlusCircleIcon className="text-white w-6 h-6" />
      <span>Adicionar nova tarefa</span>
    </button>
  );
};
 
export default AddTaskButton;