import { Button } from "@chakra-ui/react"

const ButtonAll = ({ onClick, label, width, height, variant }) => {
    return (
        <Button
            width={width}
            height={height}
            variant={variant}
            colorScheme='purple'
            onClick={onClick}
        >
            {label}
        </Button>
    )
}
export default ButtonAll