import { styled } from "styled-components";
import colors from "../constants/colors";
import ButtonAll from "./ButtonAll";
import { useMutation, gql } from "@apollo/client";
import { formatDate, formatTime } from "../utils/Dates";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const CREATE_REGISTERED_TIME = gql`
mutation CreateRegisteredTime($id: ID) {
    createRegisteredTime(input: { data: { user: $id } }) {
      registeredTime {
        id
        user {
          name
        }
        created_at
      }
    }
}
`
const ModalRegister = ({ closeModal, refetch }) => {
    const [createRegisteredTime] = useMutation(CREATE_REGISTERED_TIME);
    // eslint-disable-next-line no-unused-vars
    const [createdTime, setCreatedTime] = useState();

    const [currentTime, setCurrentTime] = useState(new Date()); // Estado para o horário atual

    const handleCreateRegister = async () => {
        try {
            const { data } = await createRegisteredTime({
                variables: {
                    id: `${localStorage.getItem("userId")}`,
                },
                context: {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            });
            // Set the created time data
            setCreatedTime(data.createRegisteredTime.registeredTime);
            setCurrentTime(new Date());
            closeModal()
            refetch();
        } catch (error) {
            // Handle error
            toast.error("O ponto não foi batido, tente novamente.")
            console.error("Error creating Registered Time:", error);
            console.error("Server error message:", error.message);
        }
    };

    return (
        <ModalOverlay>
            <ToastContainer />
            <ModalContent>
                <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
                <ContainerModal>
                    <ModalTitle>
                        <p className="title">Registrar novo ponto</p>
                        <div>
                            {/* Display current time */}
                            <InputStyle>
                                <img src="img/imgClock.svg" alt="Clock" />
                                <p className="time-point">{formatTime(currentTime)}</p>
                                <p className="date-point">{formatDate(currentTime)}</p>
                            </InputStyle>
                            <ButtonContainer>
                                <div className="button-container">
                                    <ButtonAll onClick={handleCreateRegister} label="Bater ponto" width="200px" />
                                </div>
                                <div className="button-container">
                                    <ButtonAll onClick={closeModal} variant='outline' label="Cancelar" width="200px" />
                                </div>
                            </ButtonContainer>
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
      color: ${colors.PrimaryColor};
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
    color: ${colors.PrimaryColor};
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