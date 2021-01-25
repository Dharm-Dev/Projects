import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state=({
        // rflag:false, readonly flag for edit
        viewFlag:false,
        input:'',
        data:'',
        files:['Welcome Note','Greeting'],
    });
  
  }
  render(){
    setTimeout(() => {
      console.log("Welcome to Node js");
    }, 2500);
    return(
    <div className='App' >
      <Header title='NotePad Demo'/>
      <Body title='Welcome To React' viewFlag={this.state.viewFlag} input={this.state.input} data={this.state.data} files={this.state.files} />
      <Footer title='Copyright @ Dharm Vashisth'/>
    </div>
    );
  }
}

export default App;
