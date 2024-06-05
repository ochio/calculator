import { useAtom } from "jotai"
import { numberAtom } from "../store"

export const Answer = () => {
  const [ num ] = useAtom(numberAtom)

  return (
    <div className="text-yellow-300 result">
      {num}
    </div>
  )
}