import logo from './logo.svg';
import './App.css';
import React from 'react';

class FoodList extends React.Component{
  constructor(props){
      super(props);
  }
  render(props){
    return(
      <div>
        <h2> {this.props.title} </h2>
          { this.props.fruit.join(' , ') }
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <header className="App-head">
            <img src={logo} className='App-logo' width='80px' alt='React Logo'/>
             <h1 className='mainHead'>Food List App in React</h1>
            <img src={logo} className='App-logo-back' width='80px' alt='React Logo'/>
      </header>
      
      <div className='App-header'>
        <h1> <u>{props.title} </u> </h1>
        
        <ul type='square'>
        
          <li> <FoodList title='Bread' fruit={['Tandoori Roti','Onion Naan','Rumali Roti','Lachha Pratha']} /></li>
          <li> <FoodList title='Vegetables' fruit={['Brinjal','Pumpkin','Tomato','Potato']} /></li>
          <li> <FoodList title='Dishes' fruit={['Kadhai Paneer','Chhole','Rajma','Matar Paneer']} /></li>
          <li>  <FoodList title='Fast-Food' fruit={['Sandwich','Samosa','Chowmeen','Burger','Pizza']} /></li>
        
        </ul>
        <p>Many More...</p>
        <FoodList title='Visit our Restaurant.' fruit={['Anjani Restaurant',' Karawal Nagar',' Delhi']} />

      </div>
      
      <footer className='App-head'>
            <code >Creater <sup>&copy;</sup> Dharm Vashisth</code>
      </footer>
    </div>
  );
}

export default App;
