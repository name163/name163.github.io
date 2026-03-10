import React from 'react';

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio',
            stack: ['React, CSS'],
            description: 'A responsive portfolio website built with React and CSS.',
            link: ''
        },
        {
            id: 2,
            title: 'DeepBreath VR',
            stack: ["Unity", "C#", "Oculus SDK"],
            description: 'A virtual reality experience to raise awareness for people with Megalophobia.',
            link: ''
        },
    ];

    return (
        <section id="projects" className="page active">
        <div className="project-grid">
            {projects.map((project) => (
            <div key={project.id} className="json-block">
                <span className="bracket">{'{'}</span>
                <div className="json-content">
                    &nbsp;&nbsp;<span className="property">"name"</span>: <span className="string">"{project.name}"</span>,<br />
                    &nbsp;&nbsp;<span className="property">"tech stack"</span>: [
                        {project.stack.map((tech, i) => (
                        <span key={tech}>
                            <span className="string">"{tech}"</span>
                            {i < project.stack.length - 1 ? ", " : ""}
                        </span>
                        ))}
                    ],<br />
                    &nbsp;&nbsp;<span className="property">"description"</span>: <span className="string">"{project.description}"</span>,<br />
                    &nbsp;&nbsp;<span className="property">"link"</span>: <a href={project.link} className="string">"view_repo"</a>
                </div>
                <span className="bracket">{'}'}</span>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Projects;