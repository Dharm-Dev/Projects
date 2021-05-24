import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import SimpleStorageContract from "./contracts/Election.json";
import CardProfile from './Card';
import getWeb3 from "./getWeb3";
import { Button } from 'react-bootstrap';
import 'react-bootstrap';
import "./App.css";
import './W3style.css'

class App extends Component {
  state = { uname:'admin',upass:'admin',type:'',close:false,loginFlag:false,loginStatus:false,try:false,storageValue: 0, web3: null, accounts: null, contract: null, Value:0,totalCandidate:0,getVal:0,listC:[{ }], };
  constructor(props){
    super(props);
  }
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

// setting default value
  runExample = async () => {
    
    const { accounts, contract,} = this.state;
    // Stores a given value, 5 by default.
    // await contract.methods.set(this.state.Value).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getCount().call();

    // const responselist = await contract.methods.getCandidates(1).call();
    // console.log(responselist[2]);
    
    // const response = await contract.candidatesCount;
    // Update state with the result.
    this.setState({ storageValue: response,totalCandidate:response,});
    // listC:responselist,});
   
    var cardprofile=[];
    
    for(let i=1;i<=this.state.totalCandidate;i++){
      var result = await this.state.contract.methods.getCandidates(i).call();
      
      console.log(result[0]);
      cardprofile.push(<CardProfile addr={this.state.accounts[0]} contract={this.state.contract} type={this.state.type} total={this.state.totalCandidate} name={result[1]} gender={result[2]} key={result[0]} number={result[0]} count={result[3]}/>);
    }
    this.setState({cardprofileView:cardprofile,});
  };

  handleValue=(event)=>{
    var a=event.target.value;
    this.setState({
      Value:a,
    });

  }
  // setting new value to contract variable

  addNewCandidate=async ()=>{
    const { accounts, contract,} = this.state;
    // name and then gender
    await contract.methods.addCandidate("Sohanika","f").send({from: accounts[0]});
    await contract.methods.addCandidate("Manshu","m").send({from: accounts[0]});
    this.runExample();
  }
 
  getUsername=event=>{
    var n=event.target.value;
    this.setState({
        uname:n,
      })
  }
  
  getPassword=event=>{

    var p=event.target.value;
    this.setState({
      upass:p,
    })

  }
  handleLogin=()=>{
    this.setState({
      try:true,
    })
    if(this.state.uname==='admin' && this.state.upass==='admin')
    {
      this.setState({
        loginFlag:true,
        loginStatus:true,
        try:false,
        type:'admin',
        close:true, //login successfully.
      });
      this.runExample();
    }
    else if(this.state.uname.trim()!='' && this.state.upass.trim()!=''){
      this.setState({
        loginFlag:true,
        loginStatus:true,
        try:false,
        type:'normal',
        close:true, //login successfully.
      })
      this.runExample();  //to set type variable
    }
    else{
      this.setState({
        uname:'',
        upass:'',
      })
    }
  }
  
  render() {

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    // console.log(this.state.cardprofileView);
    return (
      <div className="App">

          {/* {this.state.close &&(<div><br /><div class='alert-success'><span className='success'>Login Successfully </span><span onClick={()=>{ this.setState({close:false, })}}>x</span></div></div>)}<br /> */}

       {/* login form */}
      { !this.state.loginFlag &&
      (  <div>
                <h1>
                <center>Good to Go!</center>
              </h1>
              <p className="card">Your Truffle Box is installed and ready.</p>
              <div className='w3-container w3-padding container w3-full'>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text"  onChange={this.getUsername} placeholder="Enter Username" name="uname" required />
                <br />
                <label htmlFor="password"><b>Password</b></label>
                <input type="password"  onChange={this.getPassword} placeholder="Enter Password" name="psw" required />
                <br />
              {(!this.state.loginStatus&&this.state.try)&&<p className='error'>Invalid Credentials</p>}

                <button  onClick={this.handleLogin}>Login</button>
                <br />
              <input type="checkbox"  name="remember" /> Remember me
              </div>
          </div>)
        }

        {/* after login */}
       {(this.state.loginFlag&&this.state.loginStatus)
         &&
         (  <div>      
              {(this.state.loginFlag&&this.state.loginStatus)&&
                (<div className='w3-bar w3-row logout-header'>
                 
                    <img width="50px" className='w3-left col-lg-4 w3-circle w3-image w3-responsive' 
                       src='https://www.w3schools.com/howto/img_avatar.png'  alt='Account Image'/>
                    <span className='col-lg-4 w3-left w3-padding' ><b>{this.state.uname.trim().toUpperCase()}</b></span>
                    <Button className='logout col-lg-4 w3-right' onClick={()=>{this.setState({loginFlag:false, loginStatus:false,try:false,close:false,uname:'',upass:''})}}>
                      Log Out
                    </Button>

                    <span className='col-lg-4  w3-padding' > Welcome you as {this.state.type} User
                    <br />
                    {(this.state.type!='admin')?<span>Normal:- You can Vote your favourite candidate only once.<i>Choose Carefully</i></span>:<span>Admin</span>}
                    
                    </span>
                   
                  </div>)}        

                <div className='mainbody w3-row w3-responsive'>
                  {/* <input type='number' placeholder='Enter numeric value to set' onChange={this.handleValue} /> */}
                 
                 {/* Add more candidate */}
                 {/* {
                  (this.state.type==='admin')
                   &&
                    (
                      <div >

                     <button class="w3-circle" onClick={this.addNewCandidate}>Add More Candidates</button>
                     <hr />
                      </div>
                     )  
                  } */}
                  {/*                  
                  <div>The Last Retrieved value is:  <h2> {this.state.storageValue}</h2></div>
                  <button onClick={this.runExample}>Fetch Current Value</button> */}
                  {/* <p>{this.state.Value}</p> */}
                

              <div className='candidates w3-row w3-margin w3-section'>
                
                <div className='continer w3-full'>
                    Total Candidates: <b>{this.state.storageValue}</b>
                </div>
                <div className='w3-row w3-padding  '>
                  {this.state.cardprofileView}
                </div>
              </div>
        
             </div>
                <div className='footer'>
                  Created by Dharm Vashisth
                </div>
            </div>
      
        )
       }
       {/* <p>{this.state.uname}</p> */}



      </div>
    );
  }
 
}

export default App;
