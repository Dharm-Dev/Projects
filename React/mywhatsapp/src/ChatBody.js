import './chatbody.css';
import {IconButton} from "@material-ui/core";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CallIcon from '@material-ui/icons/Call';

function ChatBody(props){
    const pre="https://avatars.dicebear.com/4.5/api/male/";
    const post=Math.random() +".svg";
    const final=pre+post;
    const fname=props.name;
    return(
        <div className='fullbody'>
                <ChatHeader profilePic={final}  pname={fname}/>
           
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 chatBody'>
                <Sender message='I have sent the message'  time='3:09 AM' />
                <Receiver message='I am Received now'  name='Ram'  time='3:15 AM' />
                <Sender message='I have sent the message' time='3:09 AM' />
                <Receiver message='I am Received now' name='Ram'  time='3:15 AM' />
                <Sender message='I have sent the message' time='3:09 AM' />
                <Receiver message='I am Received now' name='Ram' time='3:15 AM' />
                <Receiver message='I am Received now2' name='Ram' time='3:15 AM' />
                <Receiver message='I am Received now3' name='Ram' time='3:15 AM' />
                
                <Sender message='I have sent the message 2'  time='3:09 AM' />
                <Receiver message='I am Received 2 now' name='Ram' time='3:15 AM' />
                <Sender message='I have sent the message 3'  time='3:09 AM' />
                <Receiver message='I am Received 3 now' name='Ram' time='3:15 AM' />
            </div>

            <ChatBottom />    
        </div>
    );
}

function ChatHeader(props){
    return(
   <div className='chatHeader'>
            <div className='col-sm-2 col-md-2 col-lg-2 col-xs-2'> 
                <img src={props.profilePic} className='avtar img img-responsive img-circle' width="55px" />
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
        <p align='right'><small>{props.time}</small></p>
           <p>{props.message}</p>
           {/* <p align='right'><span className='glyphicon glyphicon-check'></span></p> */}
        </span>
        
    </div>
    );
}
function Receiver(props){
    return(
        <div id='receiver'>
            <div>{props.name}</div> 
            <span id='receiveMessage' >
                <p align='right'><small>{props.time}</small></p>
                <p>{props.message}</p>
                {/* <p align='right'><span className='glyphicon glyphicon-check'></span></p> */}
            </span>
        </div>
    );
}
function ChatBottom(props){
    return(
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 chatFooter'>
            {/* <div className='col-*-2'> */}
            {/* <button className='btn btn-default '><i className='glyphicon glyphicon-heart '></i></button> */}
            {/* </div>
            <div className='col-*-8'> */}
           
            <textarea type='text' className='form-control' placeholder='Message' rows='1' ></textarea>
            {/* </div>
            <div className='col-*-2'> */}
            <button className='btn btn-default'><i className='glyphicon glyphicon-send'></i></button>
            {/* </div>             */}
    </div>);
}
export default ChatBody;