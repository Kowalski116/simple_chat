import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from './actions'

const MessageInput = ({ userthreadId }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    } 
    const handleSubmit = () => {
        if (value=='') return
        dispatch(addMessage(value,userthreadId))
        setValue("")
    }
    const handlekeyDown = (e) => {
        if (e.key === 'Enter') {
            if (value=='') return
            dispatch(addMessage(value,userthreadId))
            setValue("")
          }
    }
    return (
        <div className='input'>
        <input
            onChange={onChange}
            value={value}
            type='text'
            onKeyDown={(e) => handlekeyDown(e)}
            placeholder="Write a message..."
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
