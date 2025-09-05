import { useState, type Dispatch, type FormEvent } from "react"
import type { TodoAction } from "../reducer/todoReducer"

type TodoFormProps = {
  dispatch: Dispatch<TodoAction>
}

export default function TodoForm({ dispatch }: TodoFormProps) {
  const [newTask, setNewTask] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newTask.trim() === "") return
    dispatch({ type: "ADD_TODO", payload: newTask })
    setNewTask("")
  }

  return (
    <form
      className="flex justify-between items-center gap-5 mt-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Learning React..." 
        className="border-2 border-slate-300 rounded-md outline-none p-2 flex-1"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 transition-all text-white text-lg py-1 px-4 cursor-pointer font-semibold"
      >Add Task</button>
    </form>
  )
}
