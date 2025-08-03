// ProjectsPage.jsx
import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import "./ProjectsPage.css";

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="projects-container">
            {/*<h1>My Projects</h1>*/}
            <div className="project-grid">
                {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} onClick={setSelectedProject} />
                ))}
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}
