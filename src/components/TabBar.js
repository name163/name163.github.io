import React from 'react';

function TabBar({ currentFile }) {
    return (
        <div className="tabs-bar">
            <div className='tab active'>
                <i className={currentFile.icon}></i>
                <span>{currentFile.name}</span>
                <i className='fas fa-times close-icon'></i>
            </div>

            <div className='tabs-empty-space'></div>
        </div>
    );
}

export default TabBar;