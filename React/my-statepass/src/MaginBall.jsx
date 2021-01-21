import React from 'react';
const possibleAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Most likely',
    'Outlook not so good',
    'Very doubtful'
  ];
  const styles={
        color:"red",
        border:"2px solid red",
  };
class Magic extends React.Component{
    
    constructor(props){
        super(props);
        this.state={ran:Math.floor(Math.random()*20)};
        this.disp=this.disp.bind(this);
    }
    disp(){
        this.setState({ran:Math.floor(Math.random()*20)});
    }
    render(){
            return(
                <div>
                <h1 style={ styles }><p style={{color:"purple"}}> Message : </p> { possibleAnswers[this.state.ran] }</h1>
                <button onClick={this.disp}> Change Message</button>
                </div>
            );
    }
}

export default Magic;