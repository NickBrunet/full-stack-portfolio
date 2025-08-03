import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BasicParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);

        engine.addParticleUpdater("sizeFadeOut", () => {
            return {
                init: () => { },
                isEnabled: () => true,
                update: (particle) => {
                    const maxSize = 15;
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
                emitters: [
                    {
                        position: { x: 101, y: 101 },
                        size: { width: 0, height: 0 },
                        rate: { quantity: 4, delay: 0.4 },
                        direction: "center",
                    },
                    {
                        position: { x: -1, y: -1 },
                        size: { width: 0, height: 0 },
                        rate: { quantity: 4, delay: 0.4 },
                        direction: "center",
                    },
                ],
                particles: {
                    number: { value: 0 },
                    shape: { type: ["circle", "square", "triangle", "polygon"] },
                    size: { value: { min: 2, max: 3 } },
                    opacity: { value: { min: 0.1, max: 0.2 } },
                    color: {
                        value: ["#000000"]
                    },
                    rotate: {
                        enable: true,
                        direction: "clockwise",
                        animation: {
                            enable: true,
                            speed: 10,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
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
