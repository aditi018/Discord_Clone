import React, { useEffect } from 'react';
import './App.css';
import { useSelector , useDispatch} from "react-redux";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';
import {login , logout } from "./features/userSlice";

function App() {

  const User = useSelector(selectUser);
  const dispatch  = useDispatch();

  useEffect((authUser)=>{
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if(authUser){
        //user is logged in
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          })
        )
      }
      else{
        //user is logged out
      }
    })
  },[])

  return (
    <div className="app">
      {User ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
