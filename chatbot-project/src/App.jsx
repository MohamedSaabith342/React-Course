import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages  from './components/ChatMessages'
import './App.css'



function App(){

  // const ChatMessages = array[0];
  // const setChatMessages = array[1];
  
  const [chatMessages, setChatMessages] = useState([{
    message : "hello chatbot",
    sender :"user",
    id : "id1"
  },{
      message :"hello! how can I hep you?",
      sender:"robot",
      id : "id2"
  },{
      message :"can you get me todays date?",
      sender:"user",
      id : "id3"
  },{
      message : "Today is October 27", 
      sender : "robot",
      id : "id4"
  }])

  return(
    <div className="app-container">
      
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      
    </div>
  );
}


export default App
