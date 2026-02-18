import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "#0f172a",
                    },
                },
                particles: {
                    number: {
                        value: 60,
                    },
                    color: {
                        value: "#22d3ee",
                    },
                    links: {
                        enable: true,
                        color: "#22d3ee",
                        distance: 150,
                        opacity: 0.3,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;
