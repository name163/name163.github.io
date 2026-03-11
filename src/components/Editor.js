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

    const [lineCount, setLineCount] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const updateLineNumbers = () => {
            if (contentRef.current) {
                const height = contentRef.current.getBoundingClientRect().height;
                const lineHeight = 21;
                const lines = Math.floor(height/lineHeight) + 2;
                console.log("lines: ", height);
                setLineCount(lines);
            }
        };

        updateLineNumbers();

        const timeout = setTimeout(updateLineNumbers, 100);

        window.addEventListener("resize", updateLineNumbers);

        return () => {
            window.removeEventListener("resize", updateLineNumbers);
            clearTimeout(timeout);
        };
    }, [activeFile]);

    return (
        <main className="editor-area">
            <TabBar currentFile={currentFile} />

            <div className="breadcrumbs">
                Projects &gt; Portfolio &gt; <span id="breadcrumb-file">{currentFile.name}</span>
            </div>

            <div className="code-viewport">
                <div className="line-numbers">
                    {[...Array(lineCount)].map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <div className="content-wrapper">
                    <div ref={contentRef} className="measure-height">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Editor;