import React from 'react'
import { useForm, } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addThread } from './actions'
const Modal = ({ onClick }) => {
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addThread(data.nameUser, data.nameThread))
        onClick()
    };
    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={() => onClick()}>&times;</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Tên thread</label>
                    <input className='input-modal' type="text" {...register('nameThread', { required: true })}  />
                    <label>Tên user 1</label>
                    <input className='input-modal' type="text" {...register('nameUser.[0]', { required: true })}  />
                    <label>Tên user 2</label>
                    <input className='input-modal' type="text" {...register('nameUser.[1]', { required: true })}  />
                    <input className='submit-modal' type="submit" />
                </form>
            </div>

        </div>
    )
}

export default Modal
