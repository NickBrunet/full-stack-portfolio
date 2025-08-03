// src/components/DifficultyBar.jsx
import './DifficultyBar.css';

export default function DifficultyBar({ level }) {
    const totalSquares = 10;

    const getColor = (index) => {
        if (index >= level) return 'gray'; // Unfilled
        if (level <= 3) return 'green';
        if (level <= 6) return 'yellow';
        return 'red';
    };

    return (
        <div className="difficulty-bar">
            {Array.from({ length: totalSquares }).map((_, i) => (
                <div key={i} className={`square ${getColor(i)}`} />
            ))}
        </div>
    );
}
