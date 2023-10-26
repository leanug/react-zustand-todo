import { create } from "zustand"
import { data } from "../utils/constants"
import { generateId } from '../utils/generate-id'

const useTodoStore = create((set) => ({
  todos: data,
  addTodo: (title) =>
    set((state) => ({
      todos: [
        {
          id: generateId(), // Generate a unique ID
          title: title,
          completed: false,
        },
        ...state.todos,
      ],
    })),
  toggleTodoCompletion: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  editTodoTitle: (todoId, todoTitle) =>
    set((state) => ({
      todos: state.todos.map((todo) => 
      todo.id === todoId ? { ...todo, title: todoTitle } : todo
    )
    }))
}))

export default useTodoStore