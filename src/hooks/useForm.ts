import { useState, type ChangeEvent, type ChangeEventHandler } from "react"

type Props = {
  title:string,
  description:string
}

export function useForm({title, description}:Props) {
    const [inputElements, setInputElements] = useState({title,description});


  const onInputChange = ({target}:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement> )=>{
    const {name,value} = target;
    setInputElements({
      ...inputElements,
      [name]: value
    })
  }

  return {
    ...inputElements,
    onInputChange
  }
}
