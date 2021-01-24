import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className='App'>
      <Header title='NotePad Demo Head'/>
      <Body title='Welcome To React' />
      <Footer title='Copyright @ Dharm Vashisth'/>
    </div>
    );
  }
}

export default App;
