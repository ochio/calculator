import './App.css'
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { NumberButton } from './components/NumberButton';

init({
  debug: true,
  visualDebug: true,
})

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {Array(10).fill(null).map((_,i) => {
        return <NumberButton key={i} num={i}/>
      })}
    </>
  )
}

export default App
