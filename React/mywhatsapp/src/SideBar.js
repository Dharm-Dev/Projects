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
    const mem=props.mlist;
    const memberList=mem.map((i)=><Member name={i}/>);
    return(
    <div className='sidebar'>
        
        <div className='top'>

          <div className='Sheader'>
               <div className='col-sm-4 col-lg-4 col-md-4 col-xs-4 '>  
                    <img src="https://avatars.dicebear.com/4.5/api/male/ak32qwe21.svg" className='img img-responsive img-circle avtar' width="55vh"/>
                </div>
                {/* right icons */}
                <div className='header-right col-sm-8 col-xs-8 col-lg-8 col-md-8' align='right'>
                    <IconButton>
                        <DonutLargeRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* search icon */}
            <div className='col-md-12 col-sm-12 col-xs-12 col-lg-12 search  '>
               <input type='text' placeholder='Search Contact'  className='form-control'/>
               <button class='btn btn-default btnSearch'> 
                    <span className='glyphicon glyphicon-search'></span>
                </button>
            </div>

        </div>  
        {/* Chat Scroll Name */}
        
        <div className='chat col-sm-12 col-xs-12 col-lg-12 col-md-12'> 
                {memberList}
        </div>
    </div>
    );
}
function Member(props){
    const pre="https://avatars.dicebear.com/4.5/api/male/";
    const post=Math.random() +".svg";
    const final=pre+post;
    return(
        <div className='btn' id='profile'>
            <img  width="45px" src={final} className='img img-responsive img-circle avtar'  alt='Avatar'/>
            <div>
                <p>{props.name}</p>
                <p><small>Last Message</small></p>
            </div>
            <div align='right'>
                <small id='time'>23.32am</small>
            </div>
        </div>
    );
}
export default Sidebar;