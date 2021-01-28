import React from 'react';
import './App.css';
import db from './firebase';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      name:'',
      password:'',
    });
    this.handleChangeN=this.handleChangeN.bind(this);
    this.handleChangeP=this.handleChangeP.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    db.collection('gymusers').add({
      name:this.state.name,
      password:this.state.password,
    });
    this.setState({
      name:'',
      password:'',
    });
    console.log(this.state.name);
    console.log(this.state.password);
    
  }
  handleChangeN(e){
    const v=e.target.value;
    this.setState({
      name:v,
    });
  }
  handleChangeP(e){
    const v=e.target.value;
    this.setState({
      password:v,
    });
  }
  render() {
    return (
    <div className='App'>   
      <div className="row">
        <div className='col-lg-4 col-sm-4 col-md-4 col-xs-4'>
            <dt>Gym </dt>
            <dd>
                A gymnasium, also known as a gym, is a covered location for athletics.
                The word is derived from the ancient Greek gymnasium.     
            </dd>

            <MemList /> 
        </div>

        <div className='col-lg-4 col-sm-6 col-md-6 col-xs-6' >
          <div id='middleArea'>
            <h2 className='titleMain'> Gym Automation System </h2>
            <FormLogin name={this.state.name}
                pass={this.state.password}
                handleChangeN={this.handleChangeN}
                handleChangeP={this.handleChangeP}
                handleSubmit={this.handleSubmit}
            />
          </div>
        </div>

        <div className='col-lg-4 col-sm-2 col-md-2 col-xs-2'>
          <dt>Gym </dt>
          <dd>
              A gymnasium, also known as a gym, is a covered location for athletics.
              The word is derived from the ancient Greek gymnasium.     
          </dd>      
        </div>
      </div>

    </div>  

  );
}
}
function FormLogin(props){
  
  return(
    <form className='form' align='right'>
          <input type='text' onChange={props.handleChangeN} value={props.name} placeholder='User ID'  className='form-control form-control-login'/>
          <input type='password' onChange={props.handleChangeP} value={props.pass} placeholder='Password'  className='form-control form-control-login'/>
          <input type='submit' onClick={props.handleSubmit} className='btn btn-success btn-default' value='Login'  />
        </form>
  );
}

function MemList(props){
  // db.collection('gymusers').onSnapshot(snapshot=>
  //   snapshot.docs.map((i,k)=><li>{i.name}</li>
  //   ) );
    // const doc = db.collection('gymusers');

    // const rooms=()=>{doc.onSnapshot(docSnapshot => {
    //   docSnapshot.docs.map(i=>({
    //     id:i.id,
    //     data:i.data().name,
    //   })
    // )
    // });};
    // const lis=rooms.data.map(i=><li>{i}</li>);
  return(
    <div>
    <h1> Gym Members</h1>
    {/* <ol>{lis}</ol> */}
    </div>
  );
}
export default App;
