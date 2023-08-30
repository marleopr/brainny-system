import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/Cordinator"
import pageNotFound from "../assets/pagina-nao-encontrada.png"
import ButtonAll from "../components/ButtonAll"
import colors from "../constants/colors"
const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src="img/imgLogoPontoGo.svg" alt="PontoGo" style={{ width: '12rem', marginTop: '20px' }} />
            <h1 style={{ color: `${colors.PrimaryColor}`, margin: '30px' }}>Página não encontrada</h1>
            <img src={pageNotFound} alt="Page Not Found" style={{ width: '100px', marginBottom: '20px' }} />
            <ButtonAll onClick={() => goToLogin(navigate)} label="Voltar ao início" style={{ width: '180px', marginBottom: '50px' }} />
        </div >
    )
}
export default ErrorPage