import './App.css';
import Column from './components/Column'
import { TASK_STATE } from './store'

function App() {

  return (
    <div className='App'>
      <Column state={TASK_STATE.PLANNED} />
      <Column state={TASK_STATE.ONGOING} />
      <Column state={TASK_STATE.DONE} />
    </div>
  )
}

export default App
