import type { TodoState } from "../reducer/todoReducer"

type TodoListProps = {
  state: TodoState
  handleToggle: (id: number) => void
  handleDelete: (id: number) => void
}

export default function TodoList({ state, handleToggle, handleDelete }: TodoListProps) {

  return (
    <div className="h-[350px] overflow-y-scroll">
      {state.todos.map(todo => (
        <div key={todo.id} className="mt-4 space-y-4 bg-slate-100 rounded shadow p-4">
          <div className="flex justify-between items-center">
            <p
              className={`${todo.completed ? "line-through text-slate-300" : ""} text-lg`}
            >{todo.text}</p>
            <div className="flex gap-3">
              <button
                type="button"
                className="border border-green-200 hover:bg-green-200 transition-all p-2"
                onClick={() => handleToggle(todo.id)}
              >✔</button>
              <button
                type="button"
                className="border border-red-200 hover:bg-red-200 transition-all p-2"
                onClick={() => handleDelete(todo.id)}
              >❌</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
