import React from 'react'
import Tabs from './Tabs'
import { useSelector, useDispatch } from 'react-redux'
import { openUser } from './actions'

const ThreadTabs = ({ tabs }) => {
    const dispatch = useDispatch() 
    return (
        <div className='tab-list'>
            <Tabs className='' tabs={tabs}
            onClick={(id) => (
            dispatch(openUser(id))
            )} />
        </div>
    )
}

export default ThreadTabs
