
import React, { useEffect, Component } from 'react'
import { createStore } from 'redux'
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import ThreadTabs from './ThreadTabs';
import Thread from './Thread'
function App() {
  const messages = useSelector(state => state.threads.messages)
  const activeThreadId = useSelector(state => state.activeThreadId)
  const threads = useSelector(state => state.threads)
  const activeThread = threads.find((t) => t.id === activeThreadId);

  const tabs = useSelector(state => 
      state.threads.map(t => ({
          title: t.title,
          active: t.id === state.activeThreadId,
          id: t.id
      }))
  )
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:"100vh",
      flexDirection:'column'
    }}>
      <ThreadTabs tabs={tabs} />
      <Thread thread={activeThread} />
    </div>
  );
}

export default App;
