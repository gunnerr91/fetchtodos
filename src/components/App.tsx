import React, { Fragment } from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
