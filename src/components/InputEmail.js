import { Input, Stack } from "@chakra-ui/react"

const InputEmail = ({ placeholder }) => {
    return (
        <Stack spacing={3}>
            <Input 
            placeholder={placeholder} 
            size='md'
            width='25rem'
            />
        </Stack>
    )
}
export default InputEmail