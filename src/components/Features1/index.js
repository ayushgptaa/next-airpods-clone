import {useState} from "react"

import PausePlayBtn from "../Icons/PausePlayBtn"

import styles from "./index.module.scss"

const data = [
    {
        id: 0,

        srcSet: "/images/Features1/design_mesh_small.jpg",
        src: "/images/Features1/design_mesh_large.jpg",
        text: (
            <p>
                A <span className={styles.span}> custom-designed mesh textile </span> wraps the ear cushions to provide
                pillow-like softness while listening.
            </p>
        ),
        alt: "Image shows detail of mesh textile in pink",
    },
    {
        id: 1,
        srcSet: "/images/Features1/design_foam_small.jpg",
        src: "/images/Features1/design_foam_large.jpg",
        text: (
            <p>
                Crafted with acoustically engineered memory foam, the{" "}
                <span className={styles.span}> ear cushions </span> gently create an immersive seal that is the
                foundation of incredible sound.
            </p>
        ),

        alt: "Image shows Digital Crown and Noise Control buttons on right ear cup in pink.",
    },
]

const SingleFeature = ({srcSet, src, text, alt}) => (
    <>
        <picture className={styles.sfImg}>
            <source srcSet={srcSet} media="(max-width:768px)" />
            <img src={src} alt={alt} loading="lazy" />
        </picture>
        {text}
    </>
)

const Features = () => {
    const [pause, setPause] = useState(false)

    const pauseplayVideo = () => {
        const video = document.getElementById("video")
        pause ? video.play() : video.pause()
        setPause(!pause)
    }

    return (
        <section className={styles.rootContainer}>
            <picture className={styles.heroImg}>
                <source srcSet="/images/Features1/design_comfort_small.jpg " media="(max-width:768px)" />
                <img src="/images/Features1/design_comfort_large.jpg" alt="Design Comfort" loading="lazy" />
            </picture>

            <div className={styles.features}>
                {data.map(({srcSet, src, text, alt, id}) => (
                    <div className={styles.singleFeature} key={id}>
                        <SingleFeature srcSet={srcSet} src={src} text={text} alt={alt} id={id} />
                    </div>
                ))}
            </div>

            <div className={styles.crownVideoWrapper}>
                <video muted playsInline autoPlay loop preload="none" className={styles.crownVideo} id="video">
                    <source src="/videos/Features1/crown_video_small.mp4" media="(max-width:768px)" />
                    <source src="/videos/Features1/crown_video_large.mp4" media="(min-width:0px)" />
                </video>
                <picture className={styles.crownBody}>
                    <source srcSet="/images/Features1/design_crown_body_small.png" media="(max-width:768px)" />
                    <img
                        src="/images/Features1/design_crown_body_large.png"
                        alt="Image shows detail of digital crown in sky blue"
                        loading="lazy"
                    />
                </picture>
                <p>
                    The <span>Digital Crown</span> lets you precisely control volume, skip between tracks, answer phone
                    calls and activate Siri
                </p>

                <button className={styles.pauseplayBtn} onClick={() => pauseplayVideo()}>
                    <PausePlayBtn pause={pause} />
                </button>
            </div>
        </section>
    )
}

export default Features
