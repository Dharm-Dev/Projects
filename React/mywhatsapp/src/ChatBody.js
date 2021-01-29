import './chatbody.css';
import {IconButton} from "@material-ui/core";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CallIcon from '@material-ui/icons/Call';
const smessage=['I have sent the message','I have sent the message2','I have sent the message3','I have sent the message4'];
const rmessage=['I have receive the message','I have receive the message2','I have receive the message3','I have receive the message4'];
// const rmessage=['12'='32', '12'='32','12'='32'];
const send=smessage.map((i,k)=>(k%2===0)&&
        <Sender key={k} message= {i} time='3:05 am'/>
    );
const receive=rmessage.map((i,k)=>(k%2===0)&&
    <Receiver message= {i} name='Ram' key={k} time='3:05 am'/>
);
function ChatBody(props){
    const pre="https://avatars.dicebear.com/4.5/api/male/";
    const post=Math.random() +".svg";
    const final=pre+post;
    const fname=props.name;
    return(
        <div className='fullbody'>
            {/* Chat heading */}
            <ChatHeader profilePic={final}  pname={fname}/>
           {/* Chat Body */}
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 chatBody'>
                {send}
                {receive}
                <Sender message='I have sent the message 2'  time='3:09 AM' />
                <Receiver message='I am Received 2 now' name='Ram' time='3:15 AM' />
                {send}
                {receive}
                <Sender message='I have sent the message 3'  time='3:09 AM' />
                <Receiver message='I am Received 3 now' name='Ram' time='3:15 AM' />
            </div>
            {/* chat Footer */}
            <ChatBottom />    
        </div>
    );
}

function ChatHeader(props){
    return(
   <div className='chatHeader'>
            <div className='col-sm-2 col-md-2 col-lg-2 col-xs-2'> 
                <img alt='Profile Pic Sender' src={props.profilePic} className='avtar img img-responsive img-circle' width="55px" />
            </div>

            <div className='col-sm-7 col-md-7 col-lg-7 col-xs-7' align='left'>            
                <p className='name'>{props.pname} </p>
                <small>Last Seen : 3:02 AM</small>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 col-xs-3' align='right'>
                <IconButton><CallIcon /></IconButton>
                <IconButton><VideoCallIcon /></IconButton>
            </div>   
    </div>
    );
}
function Sender(props){
    return(
    <div id='sender'>
        <span id='sendMessage'>
            {/* owner name */}
        <span style={{float:'left'}}> You </span>     
        <p align='right'><small>{props.time}</small></p>
        <hr />
         <p>{props.message}</p>
        </span>
        
    </div>
    );
}
function Receiver(props){
    return(
        <div id='receiver'>
            <span id='receiveMessage' >
                {/* sender name */}
                <span style={{color:'black',backgroundColor:'white',float:'left'}}>{props.name} </span>     
                {/* time */}
                <p align='right'><small>{props.time}</small></p>
                <hr />
                <p>
                    {props.message}
                </p>
                
            </span>
        </div>
    );
}
function ChatBottom(props){
    return(
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 chatFooter'>
            <textarea type='text' className='form-control' placeholder='Message' rows='1'></textarea>
            <button className='btn btn-default'><i className='glyphicon glyphicon-send'></i></button>
        </div>);
}
export default ChatBody;