import { Todo } from "../models/todo";
import { AppState } from "./reducer";

export const SET_TODO = 'SET_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';
export const UPDATE_TODO = 'UPDATE_TODO';

export const COMPLETE_TODOS = "COMPLETE_TODOS"
export const DELETE_TODOS = "DELETE_TODOS"

export const SET_DATA = 'SET_DATA';

export interface SetTodoAction {
  type: typeof SET_TODO,
  payload: Array<Todo>
}

export function setTodos(todos: Array<Todo>): SetTodoAction {
  return {
    type: SET_TODO,
    payload: todos
  }
}


export interface SetDataAction {
  type: typeof SET_DATA,
  payload: AppState
}

export function setData(data: AppState): SetDataAction {
  return {
    type: SET_DATA,
    payload: data
  }
}
///////////
export interface CreateTodoAction {
  type: typeof CREATE_TODO,
  payload: Todo
}

export function createTodo(newTodo: Todo): CreateTodoAction {
  return {
    type: CREATE_TODO,
    payload: newTodo
  }
}

//////////////
export interface UpdateTodoStatusAction {
  type: typeof UPDATE_TODO_STATUS,
  payload: {
    todo: Todo,
    statusOld: string,
    statusNew: string
  }
}

export function updateTodoStatus(todo: Todo, statusOld: string, statusNew: string): UpdateTodoStatusAction {
  return {
    type: UPDATE_TODO_STATUS,
    payload: {
      todo,
      statusOld,
      statusNew
    }
  }
}

//////////////
export interface DeleteTodoAction {
  type: typeof DELETE_TODO,
  payload: string
}

export function deleteTodo(todoId: string): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

//////////////
export interface DeleteAllTodosAction {
  type: typeof DELETE_ALL_TODOS,
}

export function deleteAllTodos(): DeleteAllTodosAction {
  return {
    type: DELETE_ALL_TODOS,
  }
}

///////////
export interface ToggleAllTodosAction {
  type: typeof TOGGLE_ALL_TODOS,
  payload: boolean
}

export function toggleAllTodos(checked: boolean): ToggleAllTodosAction {
  return {
    type: TOGGLE_ALL_TODOS,
    payload: checked
  }
}
export interface UpdateTodoAction {
  type: typeof UPDATE_TODO,
  payload: Todo
}

export function updateTodo(todo: Todo): UpdateTodoAction {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}

export interface CompleteTodosAction {
  type: typeof COMPLETE_TODOS,
  payload: Array<Todo>
}

export function completeTodos(todos: Array<Todo>): CompleteTodosAction {
  return {
    type: COMPLETE_TODOS,
    payload: todos
  }
}

export interface DeleteTodosAction {
  type: typeof DELETE_TODOS,
  payload: Array<Todo>
}

export function deleteTodos(todos: Array<Todo>): DeleteTodosAction {
  return {
    type: DELETE_TODOS,
    payload: todos
  }
}

export type AppActions =
  SetTodoAction |
  CreateTodoAction |
  UpdateTodoStatusAction |
  DeleteTodoAction |
  DeleteAllTodosAction |
  ToggleAllTodosAction |
  UpdateTodoAction |
  SetDataAction |
  CompleteTodosAction |
  DeleteTodosAction;