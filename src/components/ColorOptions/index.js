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
    {
        primary: "#2f506c",
        secondary: "#91a6bb",
        color: "blue",
    },
    {
        primary: "#e4544d",
        secondary: "#d8a097",
        color: "pink",
    },
    {
        primary: "#e7ece3",
        secondary: "#afbfab",
        color: "green",
    },
]

const ColorTabs = ({setColor}) => (
    <ul className={styles.colorTabWrapper}>
        {colors.map(({primary, secondary, color}) => (
            <li
                className={styles.colorTab}
                style={{backgroundColor: primary}}
                onClick={() => {
                    setColor(color)
                }}
                key={color}>
                <span style={{backgroundColor: secondary}} />
            </li>
        ))}
    </ul>
)

const ProductImages = ({currColor}) => {
    return (
        <div className={styles.productGallery}>
            <div>
                {colors.map(({color}) => (
                    <img
                        src={`/images/ColorOptions/design_colors_${color}_front_small.jpg`}
                        alt="iphone-12-pro-max"
                        style={{zIndex: color === currColor ? 1 : -1, opacity: color === currColor ? 1 : 0}}
                        key={color}
                    />
                ))}
            </div>
            <div>
                {colors.map(({color}) => (
                    <img
                        src={`/images/ColorOptions/design_colors_${color}_side_small.jpg`}
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

            <ColorTabs setColor={setColor} />
            <ProductImages currColor={color} />
        </section>
    )
}

export default ColorOptions
