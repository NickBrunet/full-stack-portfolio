import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function BasicParticles() {
    const particlesInit = useCallback(async (engine) => {
        // This loads the full tsParticles bundle, giving access to all features
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                emitters: {
                    position: { x: 50, y: 50 },     // % of canvas, so 50/50 = center
                    rate: {
                        quantity: 2,                  // how many particles per cycle
                        delay: 0.5                    // seconds between emissions
                    },
                    size: {
                        width: 0,                     // 0 means point-like origin
                        height: 0
                    },
                    particles: {
                        shape: {
                            type: ["circle", "square", "triangle"], // randomly pick one
                        },
                        color: {
                            value: "#d3d3d3", // light gray color
                        },
                        size: {
                            value: { min: 8, max: 20 }, // random sizes between 8–20px
                        },
                        move: {
                            enable: true,               // turn on movement
                            direction: "bottom",          // allow any direction
                            speed: 1,                   // gentle varied speed
                            random: false,               // slight random motion
                            outModes: {
                                default: "out",           // fade off screen
                            },
                        },
                        number: {
                            value: 100,                 // how many particles
                            density: { enable: false },// keep count fixed
                        },
                        opacity: {
                            value: { min: 0.3, max: 0.5 }, // subtle transparency for softer look
                        },
                    },
                }
            }}

            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Puts the canvas behind your content
            }}
        />
    );
}
