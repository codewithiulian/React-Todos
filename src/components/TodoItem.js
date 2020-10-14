import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <h3>{this.props.todo.title}</h3>
    )
  }
}

export default TodoItem
