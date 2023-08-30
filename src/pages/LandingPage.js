import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/Coordinator"

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            LandingPage
            <button onClick={() => goToLogin(navigate)}>Login</button>
        </div>
    )
}
export default LandingPage