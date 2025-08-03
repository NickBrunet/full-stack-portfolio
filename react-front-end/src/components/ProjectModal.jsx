// ProjectModal.jsx
import "./ProjectModal.css";
import DifficultyBar from '../components/DifficultyBar';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={project.image} alt={`${project.title} thumbnail`} />
                <div className="modal-info">
                    <h2>{project.title}</h2>
                    <p><strong>Timeline:</strong> {project.details.timeline}</p>     
                    <p><strong>Stack:</strong> {project.details.stack.join(", ")}</p>
                    <p><strong>Bottlenecks:</strong> {project.details.bottlenecks}</p>
                    <p><strong>Notes:</strong> {project.details.notes}</p>
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            Visit Project ↗
                        </a>
                    )}
                </div>
                <div className="close-wrapper" onClick={onClose}>
                    <img
                        src="icons/close_icon.png"
                        alt="Close"
                        className="close-button"
                    />
                </div>
            </div>
        </div>
    );
}
