import Image from "next/future/image"

const IconContainer = ({src, alt, height, width}) => {
    return <Image src={src} alt={alt} height={height} width={width}></Image>
}

export default IconContainer
