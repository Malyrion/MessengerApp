import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import './App.css';


function App() {
const [input, setInput]= useState('');
const [messages, setMessages]= useState([{username: 'Malyrion', text: 'this is test message'},{username: 'Random user', text: 'hi'}]);
const [username, setUsername]= useState('');

//useState = variable in React
//useEffect = run code on a condition in React

useEffect (()=>{
  //run code here on a condition
  //if its blank inside [], this code runs ONE time when the app component loads
    setUsername(prompt('Please enter your name'));
},[]);//condition


const sendMessage=(event)=>{
  //logic for send messages
  event.preventDefault();
  setMessages([...messages,{username: username, text: input}]);
  setInput('')
}
  return (
    <div class="App">
        <h1>Messenger</h1>
        <h2>Wellcome {username}</h2>
        <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input}type='submit'onClick={sendMessage} variant="contained" color="primary">Send Message</Button>
        </FormControl>
        </form>

      {/* messages themselves*/}
      {
        messages.map(message => (
          <Message username={username} message={message}/>
          // <p>{message}</p>
        ))
      }
      {/**/}
    </div>
  );
}

export default App;
