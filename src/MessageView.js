import React, { useState, useEffect, useRef } from 'react'
import { deleteMessage } from './actions'
import { useDispatch } from "react-redux";
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import parse from 'html-react-parser';

const MessageView = ({ messages, userthreadId }) => {
    const [currentIdMessage, setCurrentIdMessage] = useState('')
    const dispatch = useDispatch()
    const handleClick =(id) => {
        dispatch(deleteMessage(id,userthreadId))
    }
    const setDeleteMessage = (id) => {
        if (id === currentIdMessage) { setCurrentIdMessage('')}
        else setCurrentIdMessage(id)
    }
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
      useEffect(() => {
        scrollToBottom()
      }, [messages]);
    const ListMessages = messages.map((message, index) => (
        <div
        className= {message.userid === userthreadId ? 'comment right' : 'comment'}
        key={index}
        >   
        {message.userid === userthreadId && (
            <button className={`delete-button ${currentIdMessage !== message.id && 'hidden'}`} onClick={() => handleClick(message.id)}>
                <FontAwesomeIcon icon={faTrashAlt} size='lg'  />
            </button>  
        ) }
       

        <div className={message.userid === userthreadId ? 'comment-content comment-right' : 'comment-content'}
            onClick={()=>{setDeleteMessage(message.id)
            console.log(message.id)}}
        >
        <pre>{message.text}</pre>
        {/* {parse(test, { trim: true })} */}
        <span className={message.userid === userthreadId ? 'time-left' : 'time-right'}>{moment(message.timestamp).format("hh:mm a")}</span>
        </div>
        </div>
    )); 
    return (
        <div className='list-message'>
        {ListMessages}
        <div ref={messagesEndRef} />
        </div>
    )
}

export default MessageView
