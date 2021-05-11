import React from 'react'
import MessageView from './MessageView'
import MessageInput from './MessageInput'
import moment from 'moment'

const Thread = ({ userActive, userChat, activeThreadId }) => {
    const messages = [...userActive.messages.map((m) => ({...m,userid:userActive.id})),...userChat.messages.map((m) => ({...m,userid:userChat   .id}))]
    messages.sort((a, b) => moment(a.timestamp).diff(moment(b.timestamp)))
    console.log(messages)
    return (
        <div style={{paddingBottom:'10'}}>
            <MessageView messages={messages} userthreadId={userChat.id} threadId={activeThreadId} />
            <MessageInput userId={userChat.id} threadId={activeThreadId} />
        </div>
    )
}

export default Thread
