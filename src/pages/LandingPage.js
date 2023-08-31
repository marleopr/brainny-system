import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/Coordinator"
import { styled } from "styled-components";
import landingBackground from "../assets/landingBackground.svg";
import colors from "../constants/colors";
import ButtonAll from "../components/ButtonAll";
import BrainnyLogo from "../assets/BrainnyLogo.png"
import AmoPetLogo from "../assets/AmoPetLogo.png"
import BusLogo from "../assets/BusLogo.png"
import GoStudyLogo from "../assets/GoStudyLogo.png"

const LandingPage = () => {
    const navigate = useNavigate();
    const scrollToPlans = () => {
        const plansSection = document.getElementById('plans');
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Main>
            <Header>
                <img src="img/landingPontoGoWhiteLogo.svg" alt="landing" />
                <Menu>
                    <ButtonAll width="10rem" label="Início" />
                    <ButtonAll onClick={scrollToPlans} width="10rem" label="Planos" />
                    <ButtonAll
                        width="10rem"
                        customBackgroundColor={colors.white}
                        customColor={colors.PrimaryColor}
                        label="Fazer login"
                        onClick={() => goToLogin(navigate)} />
                </Menu>
            </Header>
            <Publicity>
                <img className="imgPublicity" src="img/landingPublicity.svg" alt="Publicity" />
                <img className="imgAstro" src="img/landingAstro.svg" alt="Astro" />
            </Publicity>
            <Partners>
                <a href={'https://brainny.cc/'} target="_blank" rel="noopener noreferrer">
                    <img src={BrainnyLogo} alt='BrainnyLogo' />
                </a>
                <img src={AmoPetLogo} alt="AmoPetLogo" />
                <img src={BusLogo} alt="BusLogo" />
                <img src={GoStudyLogo} alt="GoStudyLogo" />
            </Partners>
            <div id="plans">
                <Plans>
                    <img className="plan-text" src="img/landingPerfectPlan.svg" alt="PerfectPlan" />
                    <img src="img/landingPlansMock.svg" alt="PlansMock" />
                </Plans>
            </div>
            <Socials>
                <img src="img/landingSocials.svg" alt="Socials" />
                <img className="footer" src="img/landingFooter.svg" alt="Footer" />
            </Socials>
        </Main>
    )
}

export default LandingPage
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${landingBackground});
    background-color: ${colors.PrimaryColor};
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 50px 50px 50px;
    @media screen and (max-device-width: 480px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        img {
            width: 10rem;
            margin-top: 10px;
        }
    }
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    @media screen and (max-device-width: 480px) {
        width: 22rem;
        margin: 10px;       
    }
`

const Publicity = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    .imgPublicity {
        width: 32.5rem;
    }
    .imgAstro {
        width: 44rem;
    }
    @media screen and (max-device-width: 480px) {
        padding: 10px;
        .imgAstro {
            display: none;
        } 
    }
`

const Partners = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
        margin: 30px;
        width: 10rem;
    }
    @media screen and (max-device-width: 480px) {
        img {
            margin: 5px;
            width: 5rem;
        } 
    }
`

const Plans = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .plan-text {
        width: 30rem;
    }
    img {
        margin: 20px 0 30px 0;
    }
`

const Socials = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 35rem;
        padding: 10px;
    }
    .footer {
        width: 20rem;
        margin: 50px;
    }
`