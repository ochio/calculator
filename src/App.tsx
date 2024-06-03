import './App.css'
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { Board } from './components/Board';
import { Answer } from './components/Answer';

init({
  debug: false,
  visualDebug: false,
})

function App() {
  return (
    <div className='w-96'>
      <Answer />
      <Board />
    </div>
  )
}

export default App
