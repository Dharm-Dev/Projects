import { getElementError } from '@testing-library/react';
import React from 'react';
class App extends React.Component
{
  constructor(props){
      super(props);
      this.state={
        value: 'Dharm Vashisth',
        f: 0
      };
      this.handleClick=this.handleClick.bind(this);
      this.handleChange=this.handleChange.bind(this);
      
  }
  handleClick(event,state){
      event.preventDefault();
      const value1=event.target.value;
      this.setState((state)=>({
        value: value1,
        f: 1 
      }));
  }
  handleChange(event){
    const value1=event.target.value;
    this.setState((state)=>({
      value:value1
    }));
    
  }
  render() {
    const v=this.state.value;
      if(this.state.f == 1){
        
        return (
          <div className="App">
            <h1>Get IT!! { this.props.title} </h1>
            <Response op = "Seesion not Coming" value={v} />
          </div>
        );
      }
      else
      {
        return (
          <div className="App">
            <Form handleClick= { this.handleClick }  title={this.state.value} handleChange={ this.handleChange } />
          </div>
        );
      }
      
    }
  }
class Form extends React.Component
{
  constructor(props){
      super(props);
  }
  render(props) {

      return (
        <div className="App">
          <br /><br />
          <header className="App-header">
            <center>
              <h1>{this.props.title}</h1>
          <input type='text' onChange={this.props.handleChange} />
          <button onClick= {this.props.handleClick}> Submit</button>
          </center>
          </header>
        </div>
      );
    }
  }
  class Response extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return  <h1> {this.props.value} Welcome Mr./Mrs. {this.props.op} </h1>
    }
  }
export default App;
