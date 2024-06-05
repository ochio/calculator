import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import { NumberButton } from "./NumberButton"
import { useEffect } from "react";
import { useAtom } from "jotai";
import { numberAtom } from "../store";

export const Board = () => {
  const [ , setNum ] = useAtom(numberAtom)
  const { ref, focusKey, focusSelf } = useFocusable();
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const handleEnterPress = (displayNum:string) => {
    setNum(prev => prev + displayNum)
  }


  return (
    <FocusContext.Provider value={focusKey}>
      <div className="gap-2 grid grid-cols-3 grid-rows-4 grid-flow-row board" ref={ref}>
        {Array(10).fill(null).map((_,i) => {
          const displayNum = 9 - i
          return <NumberButton
            key={i} num={displayNum}
            defaultClass={"w-15 bg-white text-black"}
            focusedClass={'w-15 bg-green-200 text-black'}
            onEnterPress={()=>handleEnterPress(displayNum.toString())}
          />
        })}
      </div>
    </FocusContext.Provider>
  )
}