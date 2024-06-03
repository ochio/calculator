import './App.css'
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { Button } from './components/NumberButton';

init({
  debug: true,
  visualDebug: true,
})

function App() {
  return (
    <>
      {Array(10).fill(null).map((_,i) => {
        return <Button key={i} num={i}/>
      })}
    </>
  )
}

export default App
