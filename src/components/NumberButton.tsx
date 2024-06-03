import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import clsx from 'clsx';


type Props = {
  num: number,
  defaultClass: string,
  focusedClass: string,

}

export const NumberButton = ({num,defaultClass,focusedClass}:Props) => {
  const { ref, focused } = useFocusable();

  return (<div ref={ref} className={clsx(
    defaultClass,
    focused ? focusedClass : '',
  )}>
    {num}
  </div>);
}
