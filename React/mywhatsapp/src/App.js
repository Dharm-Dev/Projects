import './App.css';
import React,{useEffect,useState} from 'react';
import SideBar from './SideBar';
import ChatBody from './ChatBody';
import db from './firebase';
function App() {
  const uname="Admin";
  const mem=['Dharm','Manoj ','Sourav','Manish','Manipal','Mohit','Survesh','Naresh'];
  const index=Math.floor(Math.random()*mem.length);
  const randProfile=mem[index];
  // fetching data from firebase db name peoples
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection('peoples').onSnapshot(
      snapshot=>(
        setRooms(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data(),
        })
        )
      ))
    )
  }, []);
  
  // const listn=rooms.map(room =>
  //   <Member name={room.data.name} lastmsg={room.data.lastMessage} />);
  return ( 
    <div className="App">
       <div className='left' >      
          <SideBar mlist={rooms} uname="listn" />
       </div>
       <div className='right'> 
            <ChatBody name={"Admin"}/>
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
              <p><small>{props.lastmsg}</small></p>
          </div>
          <div align='right'>
              <small id='time'>23.32am</small>
          </div>
      </div>
  );
}
export default App;
