// ProjectCard.jsx
import "./ProjectCard.css";

export default function ProjectCard({ project, onClick }) {
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <div className="header"></div>
            <div className="image">
                <img src={project.image} alt={`${project.title} thumbnail`} />
            </div>
            <div className="content">
                <div className="content-title">
                    <h2>{project.title}</h2>
                </div>
                <div className="content-description">
                    <p>{project.description}</p>
                </div>
                <div className="content-enter">
                    <p></p>
                </div>
            </div>
        </div>
    );
}
