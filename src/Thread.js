import React from 'react'
import MessageView from './MessageView'
import MessageInput from './MessageInput'

const Thread = ({ thread, userthread }) => {
    const messages = [...thread.messages.map((m) => ({...m,userid:thread.id})),...userthread.messages.map((m) => ({...m,userid:userthread.id}))]
    messages.sort((a, b) => b.timestamp - a.timestamp);
    console.log(messages)
    return (
        <div>
            <MessageView messages={thread.messages} usermessages={userthread.messages} />
            <MessageInput threadId={thread.id} />
        </div>
    )
}

export default Thread
