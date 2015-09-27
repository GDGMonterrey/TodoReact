import React from 'react';
import TodoList from './TodoList.jsx';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      textboxValue: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let todos = this.state.todos;
    todos.push(this.state.textboxValue);
    this.setState({ todos });
    this.refs.itembox.getDOMNode().value = '';
    console.log(this.state.todos);
  }

  onChange(e) {
    let item = e.target.value;
    this.setState({ textboxValue: item });
    console.log(item);
  }

  render() {
      return (
        <div>
        <h1 onClick={ this.hazAlgo }>TodoApp</h1>
        <form onSubmit={ this.onSubmit.bind(this) }>
          <input type="text" placeholder="What's pending?" onChange={ this.onChange.bind(this) } ref="itembox" />
        </form>
        <TodoList items={ this.state.todos } />
        </div>
      );
  }
}

export default TodoApp;
