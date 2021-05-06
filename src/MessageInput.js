import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from './actions'

const MessageInput = ({ threadId }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    } 
    const handleSubmit = () => {
        dispatch(addMessage(value,threadId))
        setValue("")
    }
    return (
        <div className='input'>
        <input
            onChange={onChange}
            value={value}
            type='text'
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
