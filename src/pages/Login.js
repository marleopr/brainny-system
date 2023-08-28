import { styled } from "styled-components"
import colors from '../constants/colors'
import InputEmail from "../components/InputEmail"
import InputPassword from "../components/InputPassword"
import ButtonAll from "../components/ButtonAll"
import { useNavigate } from "react-router-dom"
// import { useAuth } from "../hooks/AuthContext"
import { useState } from "react"
import usersApi from "../constants/usersApi.json"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

   const handleLogin = async (event) => {
        event.preventDefault();
        const authenticatedUser = usersApi.usersApi.find(
            (user) =>
                user.email === email && user.password === password
        );

        if (authenticatedUser) {
            
            if (authenticatedUser.admin) {
                // Armazene o token no localStorage aqui
                const token = "seu-token-aqui"; // Você deve gerar um token JWT válido
                localStorage.setItem("token", token);
                navigate("/admin");
            } else {
                navigate("/user");
            }
        } else {
            setError("Credenciais inválidas");
        }
    };

    return (
        <Main>
            <ContainerWelcome>
                <img src="img/imgWelcome.svg" alt="Bem vindo ao PontoGo" />
            </ContainerWelcome>
            <ContainerLogin>
                <img src="img/imgLogoPontoGo.svg" alt="Logo PontoGo" />
                <h1>Faça login</h1>
                <h4>Email</h4>
                <InputEmail placeholder="exemplo@email.com" value={email} onChange={event => setEmail(event.target.value)} />
                <h4>Senha</h4>
                <InputPassword value={password} onChange={event => setPassword(event.target.value)} />
                <a href="/">Esqueci minha senha</a>
                <ButtonAll onClick={handleLogin} label="Enviar" width="25rem" height='50px' />
                {error && <p style={{ color: 'red' }}>{error}</p>}
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
    @media screen and (max-device-width: 480px) {
        flex-direction: column;
    }
`
const ContainerWelcome = styled.div`
    img {
        width: 32rem;
      }
      @media screen and (max-device-width: 480px) {
    h1 {
    }
    img {
        width: 12rem;
    }
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
    @media screen and (max-device-width: 480px) {
        h1 {
            font-size: 20px;
        }
        img {
            width: 10rem;
        }
        h4{
            text-align: start;
            align-items: start;
        }
    button, input {
        width: 300px;
    }
}
`