import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todo} from './action';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            textbox: ''
        }
    }

    componentDidMount(){
        this.props.action.todo.addTodo('helloo world');
    }

    componentWillReceiveProps(nextProps){
        console.log("old ones ", this.props.todo);
        console.log("new ones ", nextProps.todo);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <input type='text' value={this.state.textbox} onChange={(e)=>{this.setState({textbox: e.target.value})}}/>
          <button onClick={()=>{this.props.action.todo.addTodo(this.state.textbox);}}> submittt</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        todo: state.todo
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        action:{
            todo: bindActionCreators(todo, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
