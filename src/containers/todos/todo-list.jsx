import useTodoStore from "../../stores/use-todo-store";
import TodoItem from "./todo-item";

export default function Todo () {
  const { todos, toggleTodoCompletion, removeTodo } = useTodoStore()

  return (
    <>
      {
        todos?.length ? (
          <ul className="flex flex-col gap-2.5">
            {todos.map((todo) => (
              <li key={todo.id}>
                <TodoItem 
                  todo={ todo }
                  toggleTodoCompletion={ toggleTodoCompletion }
                  removeTodo={ removeTodo }
                />
              </li>
            ))}
          </ul>
        ) : null
      }
    </>
  )
}