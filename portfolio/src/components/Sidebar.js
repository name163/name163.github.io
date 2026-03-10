import React from "react";

function Sidebar({ activeFile, setActiveFile, fileData }) {
    const fileKeys = Object.keys(fileData);

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>EXPLORER</h2></div>
            <div className="sidebar-content">
                <div className="folder-label">
                    <i className="fas fa-chevron-down"></i> Portfolio
                </div>
                <ul className="file-list">
                    {fileKeys.map((key) => (
                        <li
                        key={key}
                        className={`file-item ${activeFile === key ? 'active' : ''}`}
                        onClick={() => setActiveFile(key)}
                        >
                        <i className={fileData[key].icon}></i> {fileData[key].name}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;