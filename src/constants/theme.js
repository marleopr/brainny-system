import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
    colors: {
        PrimaryColor: colors.PrimaryColor,
        SecondaryColor: colors.SecondaryColor,
        grey: colors.grey,
        white: colors.white,
        silver: colors.silver,
    },
    components: {
        Button: {
            variants: {
                outline: {
                    color: "PrimaryColor",
                    borderColor: "PrimaryColor",
                },
            },
        },
    },
});

export default theme;
