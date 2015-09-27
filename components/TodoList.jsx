import React from 'react';

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
      { this.props.items.map((item, index) => {
        return <li key={ index + item }>{ item }</li>;
      }) }
      </ul>
    )
  }

}

export default TodoList;
