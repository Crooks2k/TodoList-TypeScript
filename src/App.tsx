import './App.css'
import { Input } from './components/Input'
import TaskList from './components/TaskList'

function App(): JSX.Element {

  return (
    <>
      <h1 className="text-center mt-3">Todo-List with TypeScript</h1>
      <Input/>
      <TaskList/>
    </>
  )
}

export default App
