import React from 'react'
import { deleteMessage } from './actions'
import { useDispatch } from "react-redux";

const MessageView = ({ messages }) => {
    const dispatch = useDispatch()
    const handleClick =(id) => {
        dispatch(deleteMessage(id))
    }
    const ListMessages = messages.map((message, index) => (
        <div
        className='comment'
        key={index}
        onClick={() => handleClick(message.id)}
        >
        {message.text}
        <span className='time'>@{message.timestamp}</span>
        </div>
    )); 
    return (
        <div className='ui comments'>
        {ListMessages}
        </div>
    )
}

export default MessageView
