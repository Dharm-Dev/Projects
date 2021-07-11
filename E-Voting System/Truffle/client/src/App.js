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
  state = {status:"false",addFlag:false,errorAdd:false,candidConstituency:'Nelhi' ,candidName:'',candidParty:'',candidNumber:'',candidEmail:'',candidPan:'',candidGender:'',uname:'admin',upass:'admin',type:'',close:false,loginFlag:false,loginStatus:false,try:false,storageValue: 0, web3: null, accounts: null, contract: null, Value:0,totalCandidate:0,getVal:0,listC:[{ }], };
  constructor(props){
    super(props);
  }
  // 70 CONSTITUENCIES OF DELHI
   constituencyDelhi=["Nerela","Burari","Timarpur","Adarsh Nagar","Badli","Rithala","Bawana","Mundka","Kirari",	
                  "Sultanpur Majra","Nangloi","Mangol Puri","Rohini","Shalimar Bagh","Shakur Basti","Tri Nagar",
                  "Wazirpur","Model Town","Sadar Bazar","Chandni Chowk","Matia Mahal","Ballimaran","Karol Bagh",
                  "Patel Nagar","Moti Nagar","Madipur","Rajouri Garden","Hari Nagar","Tilak Nagar","Janakpuri",
                  "Vikaspuri","Uttam Nagar","Dwarka","Matiala","Najafgarh","Bijwasan","Palam","Delhi Cantonment",
                  "Rajinder Nagar","New Delhi","Jangpura","Kasturba Nagar","Malviya Nagar","R K Puram","Mehrauli",
                  "Chhatarpur","Deoli","Ambedkar Nagar","Sangam Vihar","Greater Kailash","Kalkaji","Tughlkabad",
                  "Badarpur","Okhla","Trilokpuri","Kondli","Patparganj","Laxmi Nagar","Vishwas Nagar","Krishna Nagar",
                  "Gandhi Nagar","Shahdara","Seemapuri","Rohtas Nagar","Seelampur","Ghonda","Babarpur","Gokalpur"];
//  8 recognized national parties
  party=["All India Trinamool Congress","Bahujan Samaj Party","Bharatiya Janata Party","Communist Party of India",
        "Communist Party of India (Marxist)","Indian National Congress","National People's Party","	Nationalist Congress Party"];
  image=["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/All_India_Trinamool_Congress_symbol.svg/150px-All_India_Trinamool_Congress_symbol.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Election_Symbol_Elephant.png/225px-Indian_Election_Symbol_Elephant.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BJP_election_symbol.png/150px-BJP_election_symbol.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Indian_Election_Symbol_Ears_of_Corn_and_Sickle.png/225px-Indian_Election_Symbol_Ears_of_Corn_and_Sickle.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Indian_Election_Symbol_Hammer_Sickle_and_Star.png/150px-Indian_Election_Symbol_Hammer_Sickle_and_Star.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/261px-Hand_INC.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Indian_Election_Symbol_Book.svg/150px-Indian_Election_Symbol_Book.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/2/28/Nationalist_Congress_Party_Election_Symbol.png",
      ];
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
    
    const { contract,} = this.state;
    // Stores a given value, 5 by default.
    // await contract.methods.set(this.state.Value).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.getCount().call();

    // const responselist = await contract.methods.getCandidates(1).call();
    // console.log(responselist[2]);
    const voteStatus = await contract.methods.getStatus().call();
    // const response = await contract.candidatesCount;
    // Update state with the result.
    this.setState({ storageValue: response,totalCandidate:response});
    // listC:responselist,});
   
    var cardprofile=[];
    
    for(let i=1;i<=this.state.totalCandidate;i++){
      var result = await this.state.contract.methods.getCandidates(i).call();
      
      // console.log(result[0]);
      cardprofile.push(<CardProfile addr={this.state.accounts[0]} 
        contract={this.state.contract} type={this.state.type} 
        total={this.state.totalCandidate} name={result[1]} 
        gender={result[2]} key={result[0]} 
        number={result[0]} count={result[3]}/>);
    }
    this.setState({cardprofileView:cardprofile,status:voteStatus,});
  };

  handleValue=(event)=>{
    var a=event.target.value;
    this.setState({
      Value:a,
    });

  }
  // setting new value to contract variable

  addNewCandidate=async ()=>{
    alert(this.state.candidParty+"=>"+this.state.candidEmail+"=>"+this.state.candidPan+"=>"+this.state.candidConstituency);
    const { accounts, contract,} = this.state;
    // name and then gender
    if(this.state.candidName!==''&&this.state.candidGender!==''){
      this.setState({
        errorAdd:false,
        addFlag:false,
      });
      // await contract.methods.addCandidate(this.state.candidName,this.state.candidGender).send({from: accounts[0]});
      
        // this.runExample();

    }
    else{
      this.setState({
        errorAdd:true,
        addFlag:true,
      });
    }
  }
 
  getUsername=event=>{
    var n=event.target.value;
    this.setState({
        uname:n,
      })
  }
  
  getCandidatename=event=>{
    var n=event.target.value;
    this.setState({
        candidName:n,
      })
  }
  getCandidateConstituency=event=>{
    var n=event.target.value;
    console.log(" Selected!!"+n);
    this.setState({
        candidConstituency:n,
      })
  }
  getCandidatePan=event=>{
    var n=event.target.value;
    this.setState({
        candidPan:n,
      })
  }
  getCandidateNumber=event=>{
    var n=event.target.value;
    this.setState({
        candidNumber:n,
      })
  }
  getCandidateEmail=event=>{
    var n=event.target.value;
    this.setState({
        candidEmail:n,
      })
  }
  getCandidateParty=event=>{
    var n=event.target.value;
    this.setState({
        candidParty:n,
      })
  }
  getCandidateGender=event=>{
    var n=event.target.value;
    this.setState({
        candidGender:n,
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
    else if(this.state.uname.trim()!=='' && this.state.upass.trim()!==''){
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
                
                <br />
              {(!this.state.loginStatus&&this.state.try)&&<p className='error'>Invalid Credentials</p>}

                <button  onClick={this.handleLogin}>Login</button>
                <br />
              {/* <input type="checkbox"  name="remember" onClick={()=>{this.setState({uname:'admin',upass:'admin'})}} /> Remember me */}
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
                       src='https://www.w3schools.com/howto/img_avatar.png'  alt='Account'/>
                    <span className='col-lg-4 w3-left w3-padding' ><b>{this.state.uname.trim().toUpperCase()}</b></span>
                    <Button className='logout col-lg-4 w3-right' onClick={()=>{this.setState({loginFlag:false, loginStatus:false,try:false,close:false,uname:'',upass:''})}}>
                 {/* {this.state.status}  */}
                     Log Out
                    </Button>

                    <span className='col-lg-4  w3-padding' > Welcome you as {this.state.type} User
                    <br />
                    {(this.state.type!=='admin')?<span>Normal:- You can Vote your favourite candidate only once.<i>Choose Carefully</i></span>:<span>Admin</span>}
                    
                    </span>
                   
                  </div>)}        

                <div className='mainbody w3-row w3-responsive'>
                  {/* <input type='number' placeholder='Enter numeric value to set' onChange={this.handleValue} /> */}
                 
                 {/* Add more candidate */}
                 {
                  (this.state.type==='admin')
                   &&
                    (
                      <div >

 
                     {/* new candidate add */}
                      { (!this.state.addFlag)?
                         (<div>
                            <button class="w3-circle" onClick={()=>{this.setState({addFlag:true,})}}>Add More Candidates</button>
                             <hr />
                          </div>):
                      (
                       <div className='w3-container w3-padding container w3-full' style={{overflow:"auto",height:"90vh"}}>
                            <label htmlFor="cname"><b>Party Name   </b></label>
                            {/* <input type="text"  onChange={this.getCandidateParty} placeholder="Enter Party Name" name="uparty" required="required" /> */}
                           
                            <select  value={this.state.candidParty} onChange={this.getCandidateParty}>
                                  {this.party.map((i,k)=>(
                                  <option value={i}>{i}</option>
                                  ))}
                            </select>

                            <br />
                            <br />
                            <label htmlFor="cgender"><b>Constituency: </b></label>  
                            <select  value={this.state.candidConstituency} onChange={this.getCandidateConstituency}>
                                  {this.constituencyDelhi.map((i)=>(
                                  <option value={i}> {i} </option>
                                  ))}
                            </select><br /><br />
                            <label htmlFor="cname"><b>Candidate Full Name   </b></label>
                            <input type="text"  onChange={this.getCandidatename} placeholder="Enter Username" name="uname" required />
                            <br />
                            <br />
                            <label htmlFor="cgender"><b>Gender  </b></label>  
                            
                            <input type='radio' name='gender' onChange={this.getCandidateGender} value='M' />Male
                            <input type='radio' name='gender' onChange={this.getCandidateGender} value='F' />Female 
                            
                            <br />
                            <label htmlFor="cname"><b>Candidate PAN Number   </b></label>
                            <input type="text"  onChange={this.getCandidatePan} placeholder="PAN Number" name="upan" required />
                            <br />
                            <br />
                            <label htmlFor="cname"><b>Candidate Mobile Number:   </b></label>
                            <input type="number"  onChange={this.getCandidateNumber} placeholder="Mobile Number" name="umobile" required />
                            <br />
                            <br />

                            <label htmlFor="cname"><b>Candidate Email ID   </b></label>
                            <input type="email"  onChange={this.getCandidateEmail} placeholder="Email Id" name="uemail" required />
                            <br />
                            <br />
                {/* <h1>{this.state.candidConstituency}</h1> */}
                          {(this.state.errorAdd&&this.state.addFlag)&&<p className='error'>Invalid Credentials</p>}
                          <br />
                            <button  className='w3-btn w3-large' onClick={this.addNewCandidate}>Add Candidate</button>
                            <br />

                          </div>
                        )
                     }
                      </div>
                    
                     )  
                  }
                  {/*                  
                  <div>The Last Retrieved value is:  <h2> {this.state.storageValue}</h2></div>
                  <button onClick={this.runExample}>Fetch Current Value</button> */}
                  {/* <p>{this.state.Value}</p> */}
                

              <div className='candidates w3-row w3-margin w3-section'>
                
                <div className='continer w3-full'>
                    Total Candidates: <b>{this.state.storageValue}</b>
                </div>
                <div className='w3-row w3-padding  '>
                  {/* <h1>{this.state.status}</h1> */}
                  {this.state.cardprofileView} {/*(this.state.type==='admin')&&*/}
                  {/* {(!this.state.status==="false"&&this.state.type!=='admin')&&this.state.cardprofileView} */}
                  {/* {(this.state.status==="true"&&this.state.type!='admin')&&<h1>You have already Voted.Thanks for the voting.</h1>} */}
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
