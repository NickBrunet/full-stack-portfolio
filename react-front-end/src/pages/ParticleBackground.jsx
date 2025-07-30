import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // use loadSlim/loadFull depending on your version

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        // only needed if you’re using loadFull/loadSlim; remove if using v3 without helpers
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false }, // keep it within a container
                particles: {
                    number: {
                        value: 150,                 // total particles (set between 100–200)
                        density: { enable: false }, // keep count constant, don’t scale with area
                    },
                    shape: {
                        type: ['circle', 'square', 'triangle'], // multiple shapes
                    },
                    size: {
                        value: { min: 5, max: 20 }, // random sizes between 5 and 12px
                    },
                    move: {
                        enable: true,
                        speed: { min: 0.2, max: 1.0 }, // random movement speeds
                        direction: 'none',             // random directions
                        outModes: { default: 'out' },  // particles leave one side and re-enter
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.4 }, // optional: vary opacity
                    },
                    color: {
                        value: ['#d0d0d0', '#b0b0b0'], // optional: multiple grey shades
                    },
                    rotate: {
                        value: 0,             // starting angle; 0 is fine
                        random: true,         // random initial rotation for each particle
                        direction: 'random',  // 'clockwise', 'counter-clockwise' or 'random'
                        animation: {
                            enable: true,
                            speed: 5,           // degrees per second:contentReference[oaicite:1]{index=1}
                            sync: false,        // each particle rotates independently
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' }, // make particles avoid the cursor
                    },
                    modes: {
                        repulse: { distance: 20, speed: 0.1 },
                    },
                },
            }}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
}
