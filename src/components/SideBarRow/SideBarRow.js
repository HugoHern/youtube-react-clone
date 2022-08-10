import React from 'react'
import './SideBarRow.css';

function SideBarRow({selected, Icon, title})  {
    return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}> {/*if boolean is true assign selected class, else class is empty*/}
            <Icon className='sidebarrow__icon'/>
            <h2 className='sidebarrow__title'>{title}</h2>
        </div>
    )
}

export default SideBarRow