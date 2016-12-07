import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Greeting extends React.Component{
  componentWillMount(){
    console.log("In componentWillMount method");
  }
  componentDidMount(){
    console.log("In componentDidMount method");
  }
  componentWillReceiveProps(nextProps){
    console.log("In componentWillReceiveProps method", nextProps);
  }
  shouldComponentUpdate(){
    console.log("In shouldComponetUpdate method");
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("In componentWillUpdate method");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("In componentDidUpdate method");
  }
  componentWillUnmount(){
    console.log("In componentWillUnmount method");
  }

  render(){
    return(
      <div>{this.props.greeting} Srinivasa Reddy Munnangi</div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {greeting:"Hello"};
    setTimeout(() => {
      this.setState({greeting:"Hi"});
    },5000);
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <div>
            <Greeting greeting={this.state.greeting}/>
          </div>
        </p>

      </div>
    );
  }
}

export default App;
