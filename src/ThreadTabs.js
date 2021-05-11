import React from 'react'
import Tabs from './Tabs'
import { useSelector, useDispatch } from 'react-redux'
import { openThread } from './actions'

const ThreadTabs = ({ tabs, openModalClick }) => {
    const dispatch = useDispatch() 
    return (
        <div className='tab-list'>
            <Tabs className='' tabs={tabs}
            onClick={(id) => (
            dispatch(openThread(id))
            )} />
            <button className='btn' onClick={() => openModalClick()}> + </button>
        </div>
    )
}

export default ThreadTabs
