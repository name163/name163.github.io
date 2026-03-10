import React, { useState, useEffect, useRef } from "react";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import TabBar from "./TabBar";

function Editor({ activeFile, currentFile }) {
    const renderContent = () => {
        switch (activeFile) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <main className="editor-area">
            <TabBar currentFile={currentFile} />

            <div className="breadcrumbs">
                Projects &gt; Portfolio &gt; <span id="breadcrumb-file">{currentFile.name}</span>
            </div>

            <div className="code-viewport">
                <div className="line-numbers">
                    {[...Array(21)].map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="content-wrapper">
                    {renderContent()}
                </div>
            </div>
        </main>
    );
}

export default Editor;