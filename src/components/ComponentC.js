//useContext
import { useContext } from "react"
import { Data, Data1 } from "../App"
const ComponentC = () => {
  const name = useContext(Data)
  const age = useContext(Data1)

  return <>
    <h1>My name is {name} and I am {age} years old</h1>
  </>
  
}

export default ComponentC
