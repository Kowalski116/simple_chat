import React from 'react'
import MessageView from './MessageView'
import MessageInput from './MessageInput'

const Thread = ({ thread }) => {
    return (
        <div>
            <MessageView messages={thread.messages} />
            <MessageInput threadId={thread.id} />
        </div>
    )
}

export default Thread
