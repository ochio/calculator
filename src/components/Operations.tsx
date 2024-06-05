import { useFocusable, FocusContext, KeyPressDetails } from "@noriginmedia/norigin-spatial-navigation";
import clsx from "clsx";
import { useAtom } from "jotai";
import { itemAtom, numberAtom } from "../store";
import { calculate } from "../calc";

type operation = '+' | '-' | '*' | '/' | '='

type OperationProps = {
  operation: operation;
  defaultClass: string,
  focusedClass: string,
  onEnterPress?: (props: object, details: KeyPressDetails) => void;
};

const Operation = ({ operation, defaultClass, focusedClass, onEnterPress }:OperationProps) => {
  const { ref, focused } = useFocusable({onEnterPress});

  return <span ref={ref} className={clsx(focused ? focusedClass: defaultClass)}>{operation}</span>;
};

export const Operations = () => {
  const [ item , setItem ] = useAtom(itemAtom)
  const [ num, setNum ] = useAtom(numberAtom)
  const { ref, focusKey } = useFocusable();
  const ops:operation[] = ['+' , '-' , '*' , '/' , '=']

  const handleEnterPress = (op: operation) => {
    if(op === "="){
      const ans = calculate([...item, Number(num)])
      setNum(ans.toString())
      setItem([])
    }else{
      setItem(prev => [...prev, Number(num), op])
      setNum("")
    }
  }

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="ops flex flex-col gap-3" ref={ref}>
        {ops.map(v => {
          return (
            <Operation
              key={v}
              operation={v}
              defaultClass={"w-15 bg-white text-black"}
              focusedClass={'w-15 bg-green-200 text-black'}
              onEnterPress={()=>handleEnterPress(v)}
              />
          )
        })}
      </div>
    </FocusContext.Provider>
  )
}

