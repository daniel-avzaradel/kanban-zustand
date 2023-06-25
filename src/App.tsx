import './App.css'
import Column from './components/Column'

function App() {

  return (
      <div className='App'>
        <Column state='Planned' />
        <Column state='OnGoing' />
        <Column state='Done' />
      </div>
  )
}

export default App
