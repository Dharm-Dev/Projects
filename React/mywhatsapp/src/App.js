import './App.css';
import SideBar from './SideBar';
import ChatBody from './ChatBody';

function App() {
  const uname="Admin";
  const mem=['Dharm','Manoj ','Sourav','Manish','Manipal','Mohit','Survesh','Naresh'];
  const index=Math.floor(Math.random()*mem.length);
  const randProfile=mem[index];
  // random name
  return ( 
    <div className="App">
       <div className='left' > 
          <SideBar mlist={mem} uname={uname}/>
       </div>
       <div className='right'> 
            <ChatBody name={randProfile}/>
       </div>
    </div>
  );
}

export default App;
