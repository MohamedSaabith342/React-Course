import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({chatMessages, setChatMessages}){

        const [inputText, setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value)
          
        }

        function SendMessage(){
          const newChatMessages = [...chatMessages,{
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          }]

          //setChatMessages(newChatMessages);

          const response = Chatbot.getResponse(inputText);
          console.log(response);
          setChatMessages([...newChatMessages,{
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          }])


          setInputText('');
        }



        return(
          <div className="chat-input-container">
            <input 
            placeholder = "Send a message to Chatbot"
            size="30"
            onChange = {saveInputText}
            value={inputText}
            className="chat-input"
            />
            <button 
              onClick={SendMessage}
              className="send-button"
            >Send</button>
          </div>
        );
}

