import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from '../config/particles.config';

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
    return (
        <Particles  id="tsparticles" init={particlesInit} loaded={particlesLoaded}  options={particlesConfig}></Particles>
    )
}

export default ParticleBackground;