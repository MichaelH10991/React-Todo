import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "this is a title",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "This is title 2",
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
