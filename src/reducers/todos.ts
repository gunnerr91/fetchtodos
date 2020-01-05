import { Todo, ActionTypes, Action } from "../actions/index";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodos:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
