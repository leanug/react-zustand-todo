import { useState } from "react";
import useTodoStore from "../../stores/use-todo-store";

export default function AddTodo () {
  const { addTodo } = useTodoStore()
  const [title, setTitle] = useState('')

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Call your function here, e.g., handleEditTodo or handleEditMode
      // For example:
      addTodo(title)
      setTitle('')
    }
  };

  return (
    <>
      <input 
        type="text" 
        name="title"
        onChange={ handleTitle } 
        onKeyDown={ handleEnterPress }
        placeholder="Add a task"
        value={ title }
        className="p-3 rounded-xl w-full text-[#2D2B41]"
      />
    </>
  )
}