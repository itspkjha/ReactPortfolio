import Navbar from "../components/Navbar";
import MyName from "../components/MyName";
import MyIntro from "../components/MyIntro";
import Connect from "../components/Connect";
import React, { useCallback } from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

function ParticlesContainer() {
    // this customizes the component tsParticles installation
    const customInit = useCallback(async (engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    });

    const options = {
        /* custom options */
        particles: {
            number: {
                value: 20,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#000000"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 0.1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 30,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#9ca3af",
                opacity: 0.7,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    return <Particles options={options} init={customInit} />;
}

const Home = () => {
    return (
        <div className=" w-full h-screen">


            <Navbar />
            <MyName />
            <MyIntro />
            <Connect />
            <div className="w-full h-screen absolute top-0 -z-20">
                <ParticlesContainer />
            </div>


        </div>
    )
}
export default Home;