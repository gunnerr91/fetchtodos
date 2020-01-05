import { FetchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodos
}

export type Action = FetchTodosAction | DeleteTodosAction;
