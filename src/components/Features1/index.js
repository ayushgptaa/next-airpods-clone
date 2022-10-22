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
        </section>
    )
}

export default Features
