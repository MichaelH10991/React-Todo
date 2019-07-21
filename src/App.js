import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "this is a title",
        completed: false
      },
      {
        id: 2,
        title: "This is title 2",
        completed: false
      },
      {
        id: 3,
        title: "this is just superflous now... is that even how you spell that word?1",
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo} />
      </div>
    );
  }

}

export default App;
