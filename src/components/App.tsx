import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Todo } from "../actions";
import { StoreState } from "../reducers";
import { fetchTodos } from "./../actions/index";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
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

export const App = connect(mapStateToProps, { fetchTodos })(_App);
