import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import binary0 from "../images/binary_0.png";
import binary1 from "../images/binary_1.png";

export default function BasicParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);

        engine.addParticleUpdater("sizeFadeOut", () => {
            return {
                init: () => { },
                isEnabled: () => true,
                update: (particle) => {
                    const maxSize = 20;
                    const fadeDuration = 2000; // ms

                    if (particle.size.value > maxSize) {
                        if (!particle.__fadeStart) {
                            particle.__fadeStart = Date.now();
                            particle.__startOpacity = particle.opacity.value;
                        }

                        const elapsed = Date.now() - particle.__fadeStart;
                        const fadeRatio = Math.min(elapsed / fadeDuration, 1);

                        particle.opacity.value = particle.__startOpacity * (1 - fadeRatio);

                        if (fadeRatio >= 1) {
                            particle.destroy();
                        }
                    }
                },
            };
        });


    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                background: {
                    color: "#000000"
                },
                emitters: [
                    {
                        position: { x: 25, y: 0 },
                        size: { width: 0, height: 0 },
                        rate: { quantity: 1, delay: 0.1 },
                        direction: "center",
                    },
                    {
                        position: { x: 75, y: 0 },
                        size: { width: 0, height: 0 },
                        rate: { quantity: 1, delay: 0.1 },
                        direction: "center",
                    },
                ],
                particles: {
                    number: { value: 0 },
                    shape: {
                        type: "image", // Set the shape type to "image"
                        options: {
                            image: [
                                {
                                    src: binary0,
                                    width: 100,
                                    height: 150,
                                    replaceColor: true,
                                },
                                {
                                    src: binary1,
                                    width: 100,
                                    height: 150,
                                    replaceColor: true,
                                },
                            ]
                        },
                    },
                    size: { value: { min: 4, max: 8 } },
                    opacity: { value: { min: 0.2, max: 0.6 } },
                    color: {
                        value: ["#000000"]
                    },
                    rotate: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        direction: "none",
                        gravity: {
                            enable: true,
                            acceleration: 0.1, // you can tweak this (e.g., 0.5 for faster fall)
                            maxSpeed: 1.5,
                        },
                        speed: 1,
                        angle: {
                            value: 90,
                            offset: 0
                        },
                        outModes: "destory"
                    },
                    collisions: {
                        enable: true,
                        mode: "absorb",
                    },
                    updaters: ["sizeFadeOut"],
                },
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
}
