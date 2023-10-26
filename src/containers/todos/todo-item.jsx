import { useState } from 'react';
import EditTodoForm from './edit-todo';
import Trash from '../../components/icons/trash';
import Edit from '../../components/icons/edit';

export default function TodoItem ({ todo, removeTodo, toggleTodoCompletion }) {
  const [editMode, setEditMode] = useState(false)
  
  const handleEditMode = () => {
    setEditMode(prevEditMode => ! prevEditMode)
  }
  
  return (
    editMode ? (
      <>
        <EditTodoForm 
          todoTitle={ todo.title } 
          todoId={ todo.id }
          handleEditMode={ handleEditMode }
        />
      </>
    ) : (
      <div className='bg-[#16142B] p-4 rounded-xl flex flex-row items-center justify-between group'>
        <div className='flex flex-row items-center gap-2'>
          <input
            type="checkbox"
            onChange={ () => toggleTodoCompletion(todo.id)}
            checked={ todo.completed ? 'checked' : '' }
          />
          <span className={`${todo.completed ? 'line-through ' : ''}`}>
            {todo.title}
          </span>
        </div>
        <div className='flex flex-row gap-2.5 items-center opacity-0 group-hover:opacity-100 ease-in-out transition-opacity'>
          <button onClick={ handleEditMode }>
            <Edit className="w-4 h-4 fill-[#AAAFC9]" />
          </button>
          <button 
            onClick={ () => removeTodo(todo.id) }
          >
            <Trash className="w-4 h-4 fill-[#F62254]" />
          </button>
        </div>
      </div>
    )
  )
}