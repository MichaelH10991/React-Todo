import React, { Component } from 'react'
import axios from 'axios'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.addTodo(this.state.title)
        // this.setState({ title: '' })
        const headers = {
            Authorization: `Discogs key=, secret=`
        }
        let string = this.state.title

        console.log(string)
        axios({
            method: "get",
            url: `https://api.discogs.com/database/search?artist=${string.split(" ")[0]}&title=${string.split(" ")[1]}`,
            headers: headers
        }).then(res => {
            console.log(res.data.results)
            this.props.showSearchResults(res)

        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: "1" }}
                />
            </form>
        )
    }
}

export default AddTodo
