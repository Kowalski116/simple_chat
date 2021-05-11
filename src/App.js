
import React, { useEffect, useState } from 'react'
import { createStore } from 'redux'
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import ThreadTabs from './ThreadTabs';
import UserTabs from './UserTabs'
import Thread from './Thread'
import Modal from './Modal'

function App() {
  const activeThreadId = useSelector(state => state.activeThreadId)
  const threads = useSelector(state => state.threads)
  const activeThread = threads.find((t) => t.threadId === activeThreadId);
  const activeUserId = useSelector(state => state.threads.find((t) => t.threadId === activeThreadId).activeUserId)
  console.log(activeUserId);
  const userActive = activeThread.users.find((t) => t.id !== activeUserId);
  const userChat = activeThread.users.find((t) => t.id === activeUserId);
  console.log(activeThreadId)

  const tabs = activeThread.users.map(t => ({
    name: t.name,
    active: t.id === activeUserId,
    id: t.id,
    threadId: activeThreadId
  }))
  const threadTabs = threads.map(t => ({
    name: t.threadName,
    active: t.threadId === activeThreadId,
    id: t.threadId,
  }))
  const [openModal, setOpenModal] = useState(false)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: "100vh",
      flexDirection: 'column'
    }}>
      {/* <h4>Hello, {userThread.title}</h4> */}
      <ThreadTabs tabs={threadTabs} openModalClick ={() => setOpenModal(true)} />
      <UserTabs tabs={tabs} />
      <Thread userActive={userActive} userChat={userChat} activeThreadId={activeThreadId} />
      {openModal && <Modal onClick={() => setOpenModal(false) } />}
    </div>
  );
}

export default App;
