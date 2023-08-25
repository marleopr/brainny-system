import { styled } from "styled-components";
import colors from "../constants/colors";
import ButtonAll from "./ButtonAll";

const ModalRegister = ({ closeModal }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
                <ContainerModal>
                    <ModalTitle>
                        <p className="title">Registrar novo ponto</p>
                        <div>
                            <InputStyle>
                                <img src="img/imgClock.svg" alt="Imagem de um relógio" />
                                <p className="time-point">10:30</p>
                                <p className="date-point">26/09/2021</p>
                                <ButtonContainer>
                                    <div className="button-container">
                                        <ButtonAll label="Bater ponto" width="200px" />
                                    </div>
                                    <div className="button-container">
                                        <ButtonAll variant='outline' label="Cancelar" width="200px" />
                                    </div>
                                </ButtonContainer>
                            </InputStyle>

                        </div>
                    </ModalTitle>
                </ContainerModal>
            </ModalContent>
        </ModalOverlay >
    )
}
export default ModalRegister

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9999;
`;

const ContainerModal = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const ModalContent = styled.div`
  position: relative;
  width: 25rem;
  height: 29.8rem;
  border-radius: 5px;
  background-color: #ffffff;
`;
const ModalCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 24px;
  top: 1px;
  right: 10px;
  border: none;
  color: ${colors.silver};
  background-color: transparent;
  cursor: pointer;
  &:hover {
      color: ${colors.grey};
    }
  &:active {
      color: ${colors.PrincipalColor};
    }
`;
const ModalTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  .title {
    color: ${colors.grey};
    margin-top: 50px;
    font-size: 20px;
    height: 700;
  }
  p{
    color: ${colors.PrincipalColor};
    margin: 5px;
}
.time-point {
    font-size: 30px;
    width: 100%;
    text-align: center;
}
.date-point {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    text-align: center;
}
`;

const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    `
const ButtonContainer = styled.div`
    .button-container {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`