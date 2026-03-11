import React, { useState, useEffect } from 'react';

function Home() {
    const [text, setText] = useState('');
    const fullText = "Welcome to my portfolio!";

    useEffect(() => {
        if (text.length < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [text]);

    return (
        <section id="home" className="page active">
            <div className="typewriter-container">
                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}<br />
                    &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Saxon Zhou"</span>,<br />
                    &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"Software Developer / Designer"</span>,<br />
                    &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">"Web"</span>, <span className="string">"UI/UX"</span>, <span className="string">"Design"</span>],<br />
                    &nbsp;&nbsp;<span className="property">status</span>: <span className="function">Freelancing</span>()<br />
                {'}'};
                <br /><br />
                <span className="comment">// <span>{text}</span><span className="cursor">|</span></span>
            </div>
        </section>
    );
}

export default Home;