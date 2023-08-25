import { Button } from "@chakra-ui/react"

const ButtonAll = ({ onClick, label, width, height }) => {
    return (
        <Button
            width={width}
            height={height}
            colorScheme='purple'
            onClick={onClick}
        >
            {label}
        </Button>
    )
}
export default ButtonAll