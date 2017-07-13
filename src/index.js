import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'

class HelloWorld extends Component{
    render() { 
        return <div>Hello World!</div>;
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("hello_world"));
export default HelloWorld;