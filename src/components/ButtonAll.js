import { Button } from "@chakra-ui/react"

const ButtonAll = ({ label, width, height }) => {
    return (
        <Button
            width={width}
            height={height}
            colorScheme='purple'>{label}</Button>
    )
}
export default ButtonAll