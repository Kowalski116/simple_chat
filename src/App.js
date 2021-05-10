
import React, { useEffect, Component } from 'react'
import { createStore } from 'redux'
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import ThreadTabs from './ThreadTabs';
import UserTabs from './UserTabs'
import Thread from './Thread'

function App() {
  const activeThreadId = useSelector(state => state.activeThreadId)
  const threads = useSelector(state => state.threads)
  const activeThread = threads.find((t) => t.threadId === activeThreadId);
  const activeUserId = activeThread.activeUserId
  const userActive = activeThread.users.find((t) => t.id !== activeUserId);
  const userChat = activeThread.users.find((t) => t.id === activeUserId);
  console.log(activeThread)

  const tabs = activeThread.users.map(t => ({
    name: t.name,
    active: t.id === activeUserId,
    id: t.id
  }))
  // const tabs1 = useSelector(state =>
  //   state.threads.map(t => ({
  //     title: t.title,
  //     active: t.id === state.activeThreadId,
  //     id: t.id
  //   }))
  // )
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: "100vh",
      flexDirection: 'column'
    }}>
      {/* <h4>Hello, {userThread.title}</h4> */}
      <UserTabs tabs={tabs} />
      <Thread thread={userActive} userthread={userChat}/>
    </div>
  );
}

export default App;
