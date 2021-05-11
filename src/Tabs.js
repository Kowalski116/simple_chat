import React from 'react'

const Tabs = ({ tabs, onClick }) => {
    return (
        <div className='ui top attached tabular menu'>
        {
        tabs.map((tab, index) => (
            <div
            key={index}
            className={tab.active ? 'tab-list-item tab-list-active' : 'tab-list-item'}
            onClick={() => onClick(tab.id, tab.threadId)}
            >
            {tab.name}
            </div>
            ))
        }
        </div>
        )
    }

export default Tabs
