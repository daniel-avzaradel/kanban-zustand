import './App.css'
import Column from './components/Column';

function App() {

  return (
    <div className='AppContainer'>
      <h2>TASK MANAGER</h2>
      <div className='App'>
        <Column state='PLANNED' />
        <Column state='ONGOING' />
        <Column state='DONE' />
      </div>
    </div>
  )
}

export default App
