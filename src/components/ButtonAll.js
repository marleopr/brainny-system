import { Button } from "@chakra-ui/react"
import theme from "../constants/theme"

const ButtonAll = ({ onClick, label, width, height, variant, customBackgroundColor, customColor }) => {
    return (
        <Button
            width={width}
            height={height}
            variant={variant}
            color={
                customColor !== undefined ? customColor : variant === "outline" ? theme.colors.PrimaryColor : theme.colors.white}
            backgroundColor={
                customBackgroundColor !== undefined ? customBackgroundColor : variant === "outline" ? "transparent" : theme.colors.PrimaryColor
            }
            _hover={{
                color: variant === "outline" ? "white" : "white",
                backgroundColor: variant === "outline" ? theme.colors.PrimaryColor : theme.colors.SecondaryColor,
                borderColor: variant === "outline" ? theme.colors.PrimaryColor : "transparent",
            }}
            _focus={{
                outlineColor: variant === "outline" ? theme.colors.outline : "transparent",
            }}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}
export default ButtonAll