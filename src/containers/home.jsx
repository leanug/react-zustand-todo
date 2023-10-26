import ClipboardList from "../components/icons/clipboard-list"
import AddTodo from "./todos/add-todo"
import TodoList from "./todos/todo-list"

export default function HomePage () {
  return (
    <main className="bg-[#02001E] text-white min-h-screen min-w-screen p-10">
      <div className="max-w-3xl min-h-[620px] mx-auto mt-20 shadow-sm gap-3 w-full bg-[#02001E] rounded-xl p-10">
        <div className="mb-3">
          <div className="mb-6 flex flex-row gap-3 items-center">
            <ClipboardList className="w-6 h-6 fill-[#FFC22F]" />
            <h1 className="text-xl">My To Do List</h1>
          </div>
          <AddTodo />
        </div>
        <TodoList />
      </div>
    </main>
  )
}