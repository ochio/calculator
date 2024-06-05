import { KeyPressDetails, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import clsx from 'clsx';


type Props = {
  num: number,
  defaultClass: string,
  focusedClass: string,
  onEnterPress?: (props: object, details: KeyPressDetails) => void;
}

export const NumberButton = ({num,defaultClass,focusedClass,onEnterPress}:Props) => {
  const { ref, focused } = useFocusable({onEnterPress});

  return (<div ref={ref} className={clsx(
    focused ? focusedClass : defaultClass,
  )}>
    {num}
  </div>);
}
