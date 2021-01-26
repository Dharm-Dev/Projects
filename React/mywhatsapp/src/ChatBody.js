import './chatbody.css';
function ChatBody(){
    const pre="https://avatars.dicebear.com/4.5/api/male/";
    const post=Math.random() +".svg";
    const final=pre+post;
    return(
        <div className='chatbody'>
            <div className='Header'>
               
                <img src={final} className='img img-responsive img-circle' width="60px" />
                <p>
                    <br />
                    <span className='name'>Mr. Mohan Lal </span>
                    <br />
                    <p><small>Last Seen : 3:02 AM</small></p>
                </p>
            </div>
            <div className='Body'>

                <Sender message='I have sent the message' time='3:09 AM' />
                <Receiver message='I am Received now'  time='3:15 AM' />
                <Sender message='I have sent the message' time='3:09 AM' />
                <Receiver message='I am Received now'  time='3:15 AM' />
                <Sender message='I have sent the message' time='3:09 AM' />
                <Receiver message='I am Received now'  time='3:15 AM' />
             
            </div>
            
            <div className='Footer'>
                <button className='btn btn-default'><i className='glyphicon glyphicon-heart '></i></button>
                <input type='text' className='form-control ' placeholder='Message'/>
                <button className='btn btn-default'><i className='glyphicon glyphicon-send'></i></button>
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
           <p align='right'><span className='glyphicon glyphicon-check'></span></p>
        </span>
        
    </div>
    );
}
function Receiver(props){
    return(
        <div id='receiver'>
            <span id='receiveMessage' >
            <p align='right'><small>{props.time}</small></p>
                <p>{props.message}</p>
                <p align='right'><span className='glyphicon glyphicon-check'></span></p>
            </span>
        </div>
    );
}
export default ChatBody;