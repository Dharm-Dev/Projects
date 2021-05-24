import React from 'react';
import { Button } from 'react-bootstrap';
export default (props)=>{
    if(props){
        console.log('Set')
    }
    else    
        console.log('Set')
    return(
        <div>
            
            {(this.props.loginFlag&&this.props.loginStatus)&&
            (
            <div className='logout-header'>
                <img src='#' alt='Account Image'/>
                <span>Welcome <b>{this.state.uname.toUpperCase()}</b></span>
                <Button className='logout' onClick={()=>{this.setState({loginFlag:false, loginStatus:false,try:false,close:false})}}>
                  Log Out
                </Button>
            </div>
             )}         
            
            <div className='mainbody'>
                  <input type='number' onChange={this.handleValue} />
                  <button onClick={this.handleSet}>Set</button>
                  <br />
                  <h2> {this.state.storageValue}</h2><button onClick={this.runExample}>Get</button>
                  <div>The stored value is: {this.state.storageValue}</div>
                  <p>{this.state.Value}</p>
            
            
            <div>

                </div>
            </div>
                 
            <div className='footer'>
                  <p>Created by Dharm Vashisth</p>
             </div>
            

        </div>
    )
}