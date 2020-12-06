import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import './App.css';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
const [input, setInput]= useState('');
const [messages, setMessages]= useState([]);
const [username, setUsername]= useState('');

//useState = variable in React
//useEffect = run code on a condition in React

useEffect(()=>{
  //run once when the app component is loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
},[])

useEffect (()=>{
  //run code here on a condition
  //if its blank inside [], this code runs ONE time when the app component loads
    setUsername(prompt('Please enter your name'));
},[]);//condition


const sendMessage=(event)=>{
  //logic for send messages
  event.preventDefault();
  // setMessages([...messages,{username: username, message: input}]);
  db.collection('messages').add({
    username: username,
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
  setInput('')
}
  return (
    <div class="App">
        <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'/>
        <h1>Messenger</h1>
        <h2>Wellcome {username}</h2>
        <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input}type='submit'onClick={sendMessage} variant="contained" color="primary">
          <SendIcon/>
          </IconButton>
        </FormControl>
        </form>

      {/* messages themselves*/}
      <FlipMove>
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message}/>
          // <p>{message}</p>
        ))
      }
      </FlipMove>

      {/**/}
    </div>
  );
}

export default App;
