import React from "react";

function ActivityBar() {
    return (
        <div className="activity-bar">
            <div className="icon active"><i class="far fa-copy"></i></div>
            <div class="icon"><i class="fas fa-search"></i></div>
            <div class="icon"><i class="fas fa-code-branch"></i></div>
            <div class="icon"><i class="far fa-bug"></i></div>
            <div class="icon bottom"><i class="fas fa-cog"></i></div>
        </div>
    );
}

export default ActivityBar;