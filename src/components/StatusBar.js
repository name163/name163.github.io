import React from 'react';

function StatusBar() {
    return (
        <footer className="status-bar">
            <div className="left">
                <span><i className="fas fa-code-branch"></i> main*</span>
                <span><i className="far fa-times-circle"></i> 0</span>
                <span><i className="fas fa-exclamation-triangle"></i> 0</span>
            </div>
            <div className="right">
                <span id="cursor-pos">Ln 8, Col 25</span>
                <span>UTF-8</span>
                <span id="lang-mode">JavaScript</span>
                <span><i className="far fa-bell"></i></span>
            </div>
        </footer>
    );
}

export default StatusBar;