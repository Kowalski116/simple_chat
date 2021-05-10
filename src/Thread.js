import React from 'react'
import MessageView from './MessageView'
import MessageInput from './MessageInput'
import moment from 'moment'

const Thread = ({ thread, userthread }) => {
    const messages = [...thread?.messages.map((m) => ({...m,userid:thread.id})),...userthread.messages.map((m) => ({...m,userid:userthread.id}))]
    messages.sort((a, b) => moment(a.timestamp).diff(moment(b.timestamp)))
    console.log(messages)
    return (
        <div style={{paddingBottom:'10'}}>
            <MessageView messages={messages} userthreadId={userthread.id}/>
            <MessageInput userthreadId={userthread.id} />
        </div>
    )
}

export default Thread
