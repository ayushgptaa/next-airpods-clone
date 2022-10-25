import {useState} from "react"

import styles from "./index.module.scss"

const colors = [
    {
        primary: "#f5f4f0",
        secondary: "#d2d3d4",
        color: "silver",
    },

    {
        primary: "#3c3d3a",
        secondary: "#595759",
        color: "gray",
    },
]

const frontImages = [
    {
        img: `/images/ColorOptions/design_colors_silver_front_small.jpg`,
        color: "silver",
    },
    {
        img: `/images/ColorOptions/design_colors_gray_front_small.jpg`,
        color: "gray",
    },
]

const sideImages = [
    {
        img: `/images/ColorOptions/design_colors_silver_side_small.jpg`,
        color: "silver",
    },
    {
        img: `/images/ColorOptions/design_colors_gray_side_small.jpg`,
        color: "gray",
    },
]

const ColorTabs = ({primary, secondary, color, setColor}) => (
    <li
        className={styles.colorTab}
        style={{backgroundColor: primary}}
        onClick={() => {
            setColor(color)
        }}>
        <span style={{backgroundColor: secondary}} />
    </li>
)

const ProductImages = ({currColor}) => {
    return (
        <div className={styles.productGallery}>
            <div>
                {frontImages.map(({img, color}) => (
                    <img
                        src={img}
                        alt="iphone-12-pro-max"
                        style={{zIndex: color === currColor ? 1 : -1, opacity: color === currColor ? 1 : 0}}
                        key={color}
                    />
                ))}
            </div>
            <div>
                {sideImages.map(({img, color}) => (
                    <img
                        src={img}
                        alt="iphone-12-pro-max"
                        style={{zIndex: color === currColor ? 1 : -1, opacity: color === currColor ? 1 : 0}}
                        key={color}
                    />
                ))}
            </div>
        </div>
    )
}

const ColorOptions = () => {
    const [color, setColor] = useState("silver")

    return (
        <section className={styles.rootContainer}>
            <div className={styles.heading}>
                <h3>Five colours.</h3>
                <h3>Anything but monotone.</h3>
            </div>

            <ul className={styles.colorTabWrapper}>
                {colors.map(({primary, secondary, color}) => (
                    <ColorTabs primary={primary} secondary={secondary} color={color} setColor={setColor} />
                ))}
            </ul>

            <ProductImages currColor={color} />
        </section>
    )
}

export default ColorOptions
