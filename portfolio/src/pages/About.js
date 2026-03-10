import React, { useState, useEffect } from 'react';

function About() {
    return (
        <section id="about" className="page active">
            <h1># About Me</h1>
            <p>I am a passionate developer who loves building digital products.</p>
            <br />
            <h2>## Tech Stack</h2>
            <ul>
                - HTML5, CSS3, JavaScript (ES6+)<br />
                - React, Node.js, Python<br />
                - Git, Docker, AWS
            </ul>
            <br />
            <blockquote>
                &gt; "It is what it is"
            </blockquote>
        </section>
    );
}

export default About;