import { NumberButton } from "./NumberButton"

export const Board = () => {
  return (
    <div className="gap-2 grid grid-cols-3 grid-rows-3 grid-flow-row">
      {Array(10).fill(null).map((_,i) => {
        return <NumberButton key={i} num={9-i} defaultClass={"w-15 bg-white text-black"} focusedClass={'bg-green-200'}/>
      })}
    </div>
  )
}