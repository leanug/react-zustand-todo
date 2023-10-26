import { useState } from "react";
import useTodoStore from "../../stores/use-todo-store";
import Cancel from '../../components/icons/cancel'
import Ok from '../../components/icons/ok'

export default function EditTodo ({ todoTitle, todoId, handleEditMode }) {
  const { editTodoTitle } = useTodoStore()
  const [title, setTitle] = useState(todoTitle)

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleEditTodo = (e) => {
    e.preventDefault()
    editTodoTitle(todoId, title)
    handleEditMode()
  }

  return (
    <div className="flex flex-row items-center gap-5 h-14">
      <input 
        type="text" 
        name="title"
        onChange={ handleTitle } 
        placeholder="Title"
        value={ title }
        className="rounded-xl px-3 h-full w-full text-[#2D2B41]"
      />
      <div className="flex flex-row gap-3 ">
        {/* Button to add the new todo */}
        <button type="button" onClick={ handleEditTodo }>
          <Ok className="w-4 h-4 fill-[#47DF75]" />
        </button>
        <button onClick={ handleEditMode } type="button">
          <Cancel className="w-4 h-4 fill-[#F62254]" />
        </button>
      </div>
    </div>
  )
}