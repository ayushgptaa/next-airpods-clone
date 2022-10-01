import Image from "next/future/image"

const Hero = () => {
    return (
        <main>
            <section className="hero">
                <picture className="hero-img">
                    <Image src="/images/Hero/Hero.png" alt="Airpods Max" fill />
                </picture>
                <picture className="hero-text" style={{zIndex: -9}}>
                    <Image src="/images/Hero/Herotext.jpeg" alt="Airpods" fill />
                </picture>
            </section>
            <p>
                Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic
                of AirPods. The ultimate personal listening experience is here.
            </p>
        </main>
    )
}

export default Hero
