import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';


type Props = {
  num: number
}

export const NumberButton = ({num}:Props) => {
  const { ref, focused } = useFocusable();

  return (<div ref={ref} className={focused ? 'button-focused' : 'button'}>
    {num}
  </div>);
}
