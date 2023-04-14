import IconContainer from "../IconContainer"

export const PausepauseBtn = ({pause}) => {
    const src = pause ? "/images/icons/playIcon.svg" : "/images/icons/pauseIcon.svg"
    const alt = pause ? "Play Button" : "Pause Button"

    return <IconContainer src={src} alt={alt} height={26} width={26} />
}

export default PausepauseBtn
