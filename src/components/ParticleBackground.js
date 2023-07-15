import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/particles.config';

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine,'yo');
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container, "yo");
    }, []);
    return (
        <Particles  id="tsparticles" init={particlesInit} loaded={particlesLoaded}  options={particlesConfig}></Particles>
    )
}

export default ParticleBackground;