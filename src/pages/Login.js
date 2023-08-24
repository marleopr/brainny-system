import { styled } from "styled-components"
import colors from '../constants/colors'
import InputEmail from "../components/InputEmail"
import InputPassword from "../components/InputPassword"
import ButtonAll from "../components/ButtonAll"

const Login = () => {

    return (
        <Main>
            <ContainerWelcome>
                <img src="img/imgWelcome.svg" alt="Bem vindo ao PontoGo" />
            </ContainerWelcome>
            <ContainerLogin>
                <img src="img/imgLogoPontoGo.svg" alt="Logo PontoGo" />
                <h1>Faça login</h1>
                <h4>Email</h4>
                <InputEmail placeholder="exemplo@email.com" />
                <h4>Senha</h4>
                <InputPassword />
                <a href="http://null.com.br">Esqueci minha senha</a>
                <ButtonAll label="Enviar" width="25rem" height='50px' />
            </ContainerLogin>
        </Main>
    )
}
export default Login
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 99vh;
    box-sizing: border-box;
    background: rgb(227, 228, 255);
    background: radial-gradient(circle, rgba(236, 236, 255, 1) 0%, rgba(255,255,255,1) 100%);
`
const ContainerWelcome = styled.div`
    img {
        width: 32rem;
      }
    `

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 10px;
    img {
        width: 20.1rem;
        margin-bottom: 15px ;
    }
    h1 {
        color: ${colors.PrincipalColor};
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px ;
    }
    h4 {
        margin-top: 15px;
    }
    a {
        margin-top: 5px;
        margin-bottom: 15px;
        color: ${colors.PrincipalColor};
    }
`