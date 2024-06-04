import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import { NumberButton } from "./NumberButton"
import { useEffect } from "react";

export const Board = () => {
  const { ref, focusKey, focusSelf } = useFocusable();
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);


  return (
    <FocusContext.Provider value={focusKey}>
      <div className="gap-2 grid grid-cols-3 grid-rows-3 grid-flow-row" ref={ref}>
        {Array(10).fill(null).map((_,i) => {
          return <NumberButton key={i} num={9-i} defaultClass={"w-15 bg-white text-black"} focusedClass={'bg-green-200'}/>
        })}
      </div>
    </FocusContext.Provider>
  )
}