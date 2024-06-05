import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import clsx from "clsx";

type operation = '+' | '-' | '*' | '/' | '='

type OperationProps = {
  operation: operation;
  defaultClass: string,
  focusedClass: string,
};

const Operation = ({ operation, defaultClass, focusedClass }:OperationProps) => {
  const { ref, focused } = useFocusable();

  return <span ref={ref} className={clsx(focused ? focusedClass: defaultClass)}>{operation}</span>;
};

export const Operations = () => {
  const { ref, focusKey } = useFocusable();
  const ops:operation[] = ['+' , '-' , '*' , '/' , '=']

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="ops flex flex-col gap-3" ref={ref}>
        {ops.map(v => {
          return (
            <Operation
              operation={v}
              defaultClass={"w-15 bg-white text-black"}
              focusedClass={'w-15 bg-green-200 text-black'}/>
          )
        })}
      </div>
    </FocusContext.Provider>
  )
}

