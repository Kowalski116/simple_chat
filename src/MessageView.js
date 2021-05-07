import React from 'react'
import { deleteMessage } from './actions'
import { useDispatch } from "react-redux";
import moment from 'moment'

const MessageView = ({ messages, userthreadId }) => {
    const dispatch = useDispatch()
    const handleClick =(id) => {
        dispatch(deleteMessage(id,userthreadId))
    }
    const ListMessages = messages.map((message, index) => (
        <div
        className= 'comment'
        key={index}
        
        >
        <div className={message.userid === userthreadId ? 'comment-content comment-right' : 'comment-content comment-left'}
        onClick={() => handleClick(message.id)}
        >
        <p>{message.text}</p>
        <span className={message.userid === userthreadId ? 'time-left' : 'time-right'}>{moment(message.timestamp).format("hh:mm a")}</span>
        </div>
        </div>
    )); 
    return (
        <div className='list-message'>
        {ListMessages}
        </div>
    )
}

export default MessageView
