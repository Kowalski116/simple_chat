import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import parse from 'html-react-parser';
import { addMessage } from './actions'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const MessageInput = ({ userId, threadId }) => {
    console.log(userId, threadId)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    } 
    const handleSubmit = () => {
        if (value=='') return
        console.log(value)
        dispatch(addMessage(value, userId, threadId))
        setValue("")
    }
    const handlekeyDown = (e) => {
        const keyCode = e.which || e.keyCode;
        if (keyCode === 13 && !e.shiftKey) {
            if (value=='') return
            dispatch(addMessage(value, userId, threadId))
            setValue("")
            e.preventDefault()
        }
        else if (e.key === 'Enter') {

          }
        // console.log(e)
    }
    return (
        <div className='input'>
        {/* <textarea
            onChange={onChange}
            value={value}
            type='text'
            onKeyDown={(e) => handlekeyDown(e)}
            placeholder="Write a message..."
            /> */}
        <TextareaAutosize
        rowsMax={2}
        onChange={onChange}
        value={value}
        onKeyDown={(e) => handlekeyDown(e)}
        className='input'
        />

        <button
        onClick={handleSubmit}
        className='primary-button'
        type='submit'
        >
        Submit
        </button>
        </div>
    )
}

export default MessageInput
