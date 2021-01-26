import {Avatar} from "@material-ui/core";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './sidebar.css';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import {Icon} from "@material-ui/core";

function Sidebar(props){
    return(
        <div className='sidebar'>
            <div className='header'>
            {/* <Avatar /> */}
                <IconButton>
                    <AccountCircleRoundedIcon />
                </IconButton>
                
                <div className='header-right'>
                    <IconButton>
                        <DonutLargeRoundedIcon />
                    </IconButton>
                    
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    {/* <MoreVertIcon /> */}
                </div>

            </div>
            
            <div className='search form-group'>
               <input type='text' placeholder='Search Contact'  className='form-control '/>
                <IconButton><SearchIcon /></IconButton>
            </div>
    
            <div className='chat'>
                <Member name='Rohan' />
                <Member name='Mohan' />

            </div>
        
        </div>
    );
}
function Member(props){
    const pre="https://avatars.dicebear.com/4.5/api/male/";
    const post=Math.random() +".svg";
    const final=pre+post;
    return(
        <div id='profile' className='btn '>
            <img  width="45px" className='img img-responsive' src={final} alt='Avatar'/>
            
            <div>
               
                <br></br>
                <p>Myself {props.name}</p>
                <p><small>Last Message</small></p>
            </div>
        </div>
    );
}
export default Sidebar;