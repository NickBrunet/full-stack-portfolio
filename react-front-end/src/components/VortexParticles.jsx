import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);

        engine.addParticleUpdater("collapsingSpiral", (container) => {
            return {
                init: () => { },
                isEnabled: () => true,
                update: (particle) => {
                    const center = {
                        x: container.canvas.size.width / 2,
                        y: container.canvas.size.height / 2,
                    };

                    const pos = particle.getPosition();
                    const dx = pos.x - center.x;
                    const dy = pos.y - center.y;
                    const r = Math.sqrt(dx * dx + dy * dy) || 1;
                    const angle = Math.atan2(dy, dx);

                    // Archimedean spiral parameters
                    const spiralTightness = 9.0;  // angular speed multiplier
                    const spiralCollapse = -2.0;  // radial contraction rate
                    const baseSpeed = 0.2;

                    // Spiral motion (no randomness)
                    const dtheta = spiralTightness / r;
                    const dr = spiralCollapse;

                    const vx = dr * Math.cos(angle) - r * dtheta * Math.sin(angle);
                    const vy = dr * Math.sin(angle) + r * dtheta * Math.cos(angle);

                    const targetVx = vx * baseSpeed;
                    const targetVy = vy * baseSpeed;

                    // Blending factor between current velocity and spiral velocity
                    // allowes for collisions to have a visual impact.
                    const blend = 0.2;

                    particle.velocity.x = (1 - blend) * particle.velocity.x + blend * targetVx;
                    particle.velocity.y = (1 - blend) * particle.velocity.y + blend * targetVy;

                    // adjust opacity based on maximum radius of 1000
                    particle.opacity.value = (Math.round(r / 10) / 100) - 0.1

                    // Remove near center
                    if (r < 150) {
                        container.particles.remove(particle);
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
                        position: { x: -1, y: -1 },
                        size: { width: 0, height: 0 },
                        rate: { quantity: 4, delay: 0.3 },
                        particles: {
                            group: "glowing"
                        }
                    },
                ],
                background: {
                    color: "#000000"
                },
                particles: {
                    number: { value: 0 },
                    shape: {
                        type: "image", // Set the shape type to "image"
                        options: {
                            image: {
                                src: "", // Specify the image source
                                width: 100, // Optional: image width
                                height: 100, // Optional: image height
                                replaceColor: true, // Optional: replace image colors with particle color
                            },
                        },
                    },
                    size: { value: { min: 2, max: 4 } },
                    opacity: { value: 1 },
                    color: {
                        value: ["#ffffff", "#ffd1f5", "#8abfff", "#d38aff", "#9dfca6", "#e6b3ff", "#99eaff"]
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
                        speed: 1, // motion is fully handled by velocity
                    },
                    collisions: {
                        enable: true,
                        mode: "bounce", // or "absorb" or "destroy"
                    },
                    updaters: ["collapsingSpiral"],
                },
                groups: {
                    glowing: {
                        blendMode: "add"
                    }
                }
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
