import Image from "next/future/image"

import styles from "./index.module.scss"

const Hero = () => {
    return (
        <main>
            <section className={styles.rootContainer}>
                <picture className={styles.heroImg}>
                    <Image src="/images/Hero/Hero.png" alt="Airpods Max" fill />
                </picture>
                {/* <picture className={styles.heroTextImg} style={{zIndex: -9}}>
                    <Image src="/images/Hero/Herotext.jpeg" alt="Airpods" fill />
                </picture> */}
            </section>
            <p>
                Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic
                of AirPods. The ultimate personal listening experience is here.
            </p>
        </main>
    )
}

export default Hero
