import React from 'react'
import { deleteMessage } from './actions'
import { useDispatch } from "react-redux";
import moment from 'moment'

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
        <span className='time'>@{moment(Date.now).calendar()}</span>
        </div>
    )); 
    return (
        <div className='list-message'>
        {ListMessages}
        </div>
    )
}

export default MessageView
