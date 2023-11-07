import Column from './components/Column'
import { TASK_STATE } from './store'

function App() {

  return (
    <div className='flex lg:items-start items-center justify-center bg-slate-950 min-h-screen p-6 flex-col lg:flex-row gap-4'>
      <Column state={TASK_STATE.PLANNED} />
      <Column state={TASK_STATE.ONGOING} />
      <Column state={TASK_STATE.DONE} />
    </div>
  )
}

export default App
