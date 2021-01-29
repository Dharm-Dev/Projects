import './App.css';
import React,{useEffect,useState} from 'react';
import SideBar from './SideBar';
import ChatBody from './ChatBody';
import db from './firebase';
function App() {
  const uname="Admin";
  const bname="Manmohan";
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
                  )
          )
        )
      }, []);

  return ( 
    <div className="App">
       <div className='left' >      
          <SideBar mlist={rooms} key={rooms.id} uname={uname} />
       </div>
     
       <div className='right'> 
            <ChatBody name={bname}/>
       </div>
    </div>);
}
export default App;
