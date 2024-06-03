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
    <>
      <Answer />
      <Board />
    </>
  )
}

export default App
