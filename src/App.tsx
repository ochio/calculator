import './App.css'
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { Board } from './components/Board';
import { Answer } from './components/Answer';
import {Operations} from './components/Operations';

init({
  debug: false,
  visualDebug: false,
})

function App() {
  return (
    <div className='w-96 grid grid-cols-4 grid-rows-4 gap-x-1.5'>
      <Answer />
      <Board />
      <Operations />
    </div>
  )
}

export default App
