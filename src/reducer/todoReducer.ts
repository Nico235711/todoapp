import type { Todo } from "../types"

export type TodoAction = 
  | { type: "ADD_TODO", payload: string }
  | { type: "TOGGLE", payload: number }
  | { type: "DELETE", payload: number }

export type TodoState = {
  todos: Todo[]
}

const INITIAL_TODOS = () : Todo[] => {
  const storedTodos = localStorage.getItem("todos")
  return storedTodos ? JSON.parse(storedTodos) : []
}

export const initialState: TodoState = {
  todos: INITIAL_TODOS()
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction) => {
  if (action.type === "ADD_TODO") {
    const newTodo: Todo = {
      id: state.todos.length + 1,
      text: action.payload,
      completed: false
    }
    return {
      ...state,
      todos: [...state.todos, newTodo]
    }
  }
  if (action.type === "TOGGLE") {
    const updatedTodos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
    return {
      ...state,
      todos: updatedTodos
    }
  }
  if (action.type === "DELETE") {
    const updatedTodos = state.todos.filter(todo => todo.id !== action.payload)
    return {
      ...state,
      todos: updatedTodos
    }
  }
  return state
}