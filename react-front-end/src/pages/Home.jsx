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
                </p>
            </div>
        </div>
    );
}
