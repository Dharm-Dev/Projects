import './sidebar.css';
import React from 'react';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import {IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import db from './firebase';

class  Sidebar extends React.Component{
    
    constructor(props){
        super(props);
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeMsg=this.handleChangeMsg.bind(this);
        this.addNew=this.addNew.bind(this);
       this.toggleBtn=this.toggleBtn.bind(this);

        this.state=({
            visiblemsg:'false',
            hidebtn:'false',
            uname:'',
            ulastmsg:'',
        });
    }
    toggleBtn(e){
        e.preventDefault();
        const val=(this.state.hidebtn==='true')?'false':'true';
        this.setState({
            hidebtn:val,
            uname:'',
            visiblemsg:'false',
            ulastmsg:'',
        });
    }
    addNew(e){
        e.preventDefault();
        const val=(this.state.hidebtn==='true')?'false':'true';
        if(this.state.name!==''){
            if(this.state.ulastmsg!=='')
            {
                const pre = "https://avatars.dicebear.com/4.5/api/male/ak"+Math.floor(Math.round()*3212).toLocaleString()+ this.state.uname;
                db.collection('peoples').add({
                    name:this.state.uname,
                    lastMessage:this.state.ulastmsg,
                    picUrl:pre+'.svg',
                });
            } 
        }
        
        this.setState({
            visiblemsg:'false',
            hidebtn:val,
            uname:'',
            ulastmsg:'',
        });
        
    }

    handleChangeName(e){
        const v=e.target.value;
        this.setState({
            uname:v,
            visiblemsg:'true',
        });
    }
    handleChangeMsg(e){
        const v=e.target.value;
        this.setState({
            ulastmsg:v,
        });
    }
    render(){

    const mlist=this.props.mlist.map(room =>
        <Member name={room.data.name} lastmsg={room.data.lastMessage} pic={room.data.picUrl}/>);
    
    return(
        <div className='sidebar'>
            
            <div className='top'>
            <div className='Sheader'>
                <div className='col-sm-3 col-lg-3 col-md-3 col-xs-3 '>  
                        <img src="https://avatars.dicebear.com/4.5/api/male/ak32qwe21.svg" className='img img-responsive img-circle avtar' alt="ProfilePic" width="55vw"/>
                    </div>
                    <div className='col-sm-3 col-xs-3 col-lg-3 col-md-3' >
                        <p className='userName'>{this.props.uname}</p>
                    </div>
                    {/* </div> */}
                    {/* right icons */}
                    <div className='header-right col-sm-6 col-xs-6 col-lg-6 col-md-6' align='right'>
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
                    <div>

                    </div>
            </div>

                {/* search icon */}
                <div className='col-md-12 col-sm-12 col-xs-12 col-lg-12 search  '>
                    <input type='text' placeholder='Search Contact'  className='form-control'/>
                    <button className='btn btn-default btnSearch'> 
                        <span className='glyphicon glyphicon-search'></span>
                    </button>
                </div>
            {/* new one */}
                <div align='center' >
                  { (this.state.hidebtn==='true')&& 
                      <input type='text' onChange={this.handleChangeName} className='form-control' placeholder='Name' value={global.uname} required='true' />
                   }
                   {(this.state.visiblemsg=='true') && <input type='text' onChange={this.handleChangeMsg} className='form-control' placeholder='New Message' value={global.ulastmsg} required='true' />}

                   { this.state.hidebtn==='true' && <input type='submit' onClick={this.addNew} className='btn btn-block form-control btn-success' value='Create User' /> }
                    {/* <button  onClick={this.addNew} className='btn btn-block form-control btn-success'>Add Chat</button> */}
                   {this.state.hidebtn==='true' ? <button  onClick={this.toggleBtn} className='btn btn-block form-control btn-success'>Cancel</button> 
                   :
                    <button  onClick={this.toggleBtn} className='btn btn-block form-control btn-success'>Add New User</button>
                    }
                </div>

            {/* chat */}
                <div className='chat col-sm-12 col-xs-12 col-lg-12 col-md-12'> 
                    {mlist}
                </div>
            </div>  
        </div>
        );
    }
}
function Member(props){
    // const pre="https://avatars.dicebear.com/4.5/api/male/";
    // const post=Math.random() +".svg";
    // const final=pre+post;
    return(
        <div className='btn' id='profile'>
            <img  width="45px" src={props.pic} className='img img-responsive img-circle avtar'  alt='Avatar'/>
            <div>
                <p>{props.name}</p>
                <p><small>{props.lastmsg}</small></p>
            </div>
            <div align='right'>
                <small id='time'>23.32am</small>
            </div>
        </div>
    );
  }
export default Sidebar;