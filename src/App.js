import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import About from './components/pages/About';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
// import axios from 'axios'

import uuid from 'uuid'

// const headers = {
//   Authorization: `Discogs key=iWtQlVHcHOISzAHrPxHd, secret=xteeqJIzYprkZnkbuRcvbXUACvHiAZIE`
// }

// let string = `Daughters `
// let url = `https://api.discogs.com/database/search?artist=${string.split(" ")[0]}&title=${string.split(" ")[1]}`

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    // axios({
    //   method: "get",
    //   url: url,
    //   headers: headers
    // }).then(res => {
    //   console.log(url)
    //   // console.log([res.data])
    //   this.setState({ todos: res.data.results })

    // })
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

  showSearchResults = (res) => {
    this.setState({ todos: res.data.results })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo showSearchResults={this.showSearchResults} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
