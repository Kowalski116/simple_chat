import React from 'react'
import Tabs from './Tabs'
import { useSelector, useDispatch } from 'react-redux'
import { openUser } from './actions'

const UserTabs = ({ tabs }) => {
    const dispatch = useDispatch()
    return (
        <div className='tab-list'>
            <Tabs className='' tabs={tabs}
                onClick={(id,activeThreadId) => (
                    dispatch(openUser(id,activeThreadId))
                )} />
        </div>
    )
}

export default UserTabs
