import { useState } from "react"
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import colors from "../constants/colors"

const InputPassword = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='*************'
                size='md'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ?
                        <FontAwesomeIcon style={{ color: `${colors.PrincipalColor}` }} icon={faEye} />
                        :
                        <FontAwesomeIcon style={{ color: `${colors.PrincipalColor}` }}  icon={faEyeSlash} />
                    }
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}
export default InputPassword