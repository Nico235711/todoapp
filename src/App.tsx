import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducer/todoReducer";
import TodoList from "./components/TodoList";

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id })
  }

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id })
  }

  return (
    <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow mt-5">
      <h1 className="text-4xl font-black text-center">TODO List ✅</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList
        state={state} 
        handleToggle={handleToggle} 
        handleDelete={handleDelete} 
      />
    </div>
  )
}
