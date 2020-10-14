import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Walk the dog',
          completed: false
        },
        {
          id: 2,
          title: 'Do the dishes',
          completed: false
        },
        {
          id: 3,
          title: 'Think about your future',
          completed: false
        },
      ]
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
