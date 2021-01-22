import './App.css';
// import logo from './logo.svg';
import React from 'react';
const textAreaStyle={
  color:'navy',
  border:'3px double red',
  fontSize:16,
  margin:12,
  minWidth:"50vw",
  minHeight:"20vh",
};

const wicon=120;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      input:'',
      toDoList:[],
    });
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.resetList=this.resetList.bind(this);
  }
  resetList(event){
    event.preventDefault();
    this.setState({
      input:''
    });
  }
  handleChange(event){
    const value=event.target.value;
    this.setState({
        input:value,
    });
  }

  handleSubmit(event){
    event.preventDefault();

    const val= this.state.input.split(',');
    this.setState((state)=>({
        toDoList: val,
        input:'',
    }));
  }

  render(){   
    const placeHolderText="Enter Items seprated by comma(,)";
    return (
      <div className="App">
      <header className="App-header">
        <h1>
            {this.props.title}
        </h1>
        <textarea type="text" style={textAreaStyle} value={this.state.input} onChange={this.handleChange} placeholder={placeHolderText}>
        </textarea>
        {this.state.input && <div> <input type='reset' onClick={this.resetList}/><button onClick={this.handleSubmit}>Create List</button></div>}

       <Result todo= { this.state.toDoList }/> 
      </header>
    </div>
    );
  }
}

function Result(props) {

  const renderList= props.todo;
  const list = renderList.map( (item) => <li> {item} </li>
    );

        return (  
          <div className="App">
            { props.todo.length > 0 && <div><h3><u> To Do List Tasks : </u></h3><ul> {list} </ul>*<small>Type in the box for the new list then this list will be <em>Discarded</em></small></div>}
          </div>
        );
}

export default App;
