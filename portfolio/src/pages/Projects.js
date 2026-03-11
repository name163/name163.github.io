import React, { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Use your API Gateway Invoke URL here
        const API_URL = "https://9a972dzn37.execute-api.ap-southeast-6.amazonaws.com/prod/projects";

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log("Data received from API:", data);
                if (data.body) {
                    const parsedProjects = JSON.parse(data.body);
                    setProjects(parsedProjects);
                } else if (Array.isArray(data)) {
                    setProjects(data);
                }

                setLoading(false);
            })
            .catch(err => {
                console.error("AWS Fetch Error:", err);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <div className='loading-state'>
                <span className='comment'>Fetching projects from AWS DynamoDB...</span>
            </div>
        );
    }

    return (
        <section id="projects" className="page active">
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={project.id || index} className="json-block">
                        <span className="punctuation">{'{'}</span><br />
                        
                        {/* ID */}
                        &nbsp;&nbsp;<span className="property">"id"</span>: <span className="number">{project.id}</span>,<br />
                        
                        {/* Name */}
                        &nbsp;&nbsp;<span className="property">"name"</span>: <span className="string">"{project.name}"</span>,<br />
                        
                        {/* Stack */}
                        &nbsp;&nbsp;<span className="property">"stack"</span>: [
                        {project.stack?.map((tech, i) => (
                            <React.Fragment key={i}>
                                <span className="string">"{tech}"</span>
                                {i < project.stack.length - 1 ? ", " : ""}
                            </React.Fragment>
                        ))}
                        ],<br />

                        {/* Description */}
                        &nbsp;&nbsp;<span className="property">"description"</span>: <span className="string">"{project.description}"</span>,<br />

                        {/* Link */}
                        &nbsp;&nbsp;<span className="property">"link"</span>: <a href={project.link} target="_blank" rel="noreferrer" className="string">"view-project"</a><br />
                        
                        <span className="punctuation">{'}'}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;