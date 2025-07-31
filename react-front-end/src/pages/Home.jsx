import BasicParticles from '../components/BasicParticles.jsx';
import './Home.css';

export default function Home() {
    return (
        <div className="home-wrapper">
            <BasicParticles />
            <div className="author-container">
                <h1 className="typed-name">
                    <span className="typed-content">Nick Brunet</span>
                    <span className="cursor">|</span>
                </h1>
                <p className="description">
                    Hi, I'm Nick Brunet — a software development student passionate about building elegant solutions to complex problems.
                    With hands-on experience in Python, JavaScript, C#, Java, React, Node.js, PostgreSQL, and core web technologies like
                    HTML and CSS, I specialize in crafting clean, user-focused applications. I thrive in collaborative environments and bring
                    a strong sense of leadership, problem-solving, and adaptability to every project. This portfolio showcases my technical skills,
                    development journey, and dedication to continuous growth as a programmer and teammate.
                </p>
            </div>
        </div>
    );
}
