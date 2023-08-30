import React, { useState } from "react";
import { styled } from "styled-components";
import colors from "../constants/colors";
import Pagination from "../hooks/Pagination";
import { goToLogin } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import ButtonAll from "../components/ButtonAll";
import ModalRegister from "../components/ModalRegister";
import { useQuery, gql } from "@apollo/client";
import { formatDate, formatTime } from "../utils/Dates";
import { useProtectedPage } from "../hooks/useProtectPage";
import ClockLoader from "../components/ClockLoader";

// import { useProtectedPage } from "../hooks/useProtectPage";
// import { useAuth } from "../hooks/AuthContext";

const REGISTERED_TIMES_QUERY_BY_USER = gql`
query RegisteredTimesUserByUser($id: ID!) {
    registeredTimes(
      where: { user: { id: $id } }
      limit: 27
      sort: "created_at:DESC"
    ) {
      id
      created_at
      user {
        id
        name
        username
        email
        role {
          id
          name
        }
      }
    }
  }
`;

const User = () => {
    useProtectedPage()

    const navigate = useNavigate()
    // const { logout } = useAuth();
    // useProtectedPage()
    const [currentPage, setCurrentPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);

    const { loading, error, data, refetch } = useQuery(REGISTERED_TIMES_QUERY_BY_USER, {
        variables: {
            id: `${localStorage.getItem("userId")}`,
        },
        context: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    });

    // if (loading) return <p>Loading...</p>;
    if (loading) return <ClockLoader />;
    if (error) return <p>Error: {error.message}</p>;

    const registeredTimes = data.registeredTimes;

    const itemsPerPage = 9;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = registeredTimes.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(registeredTimes.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const handleLogout = () => {
        localStorage.clear();
        goToLogin(navigate)
    };

    return (
        <Main>
            <Menu style={{ alignItems: 'center' }} bg="#ffffff.200" w="180px" h="98vh">
                <img style={{ width: '8.3rem', margin: '20px' }} src="img/imgLogoPontoGo.svg" alt="Logo PontoGo" />
                <Dashboard>
                    <img src="img/imgDashboardUser.svg" alt="DashboardUser" />
                </Dashboard>
                <LogoutContainer onClick={handleLogout}>
                    <img src="img/imgLogout.svg" alt="Logout" />
                    <p>Sair</p>
                </LogoutContainer>
            </Menu>
            <TableContainer>
                <ButtonContainer>
                    <ButtonAll onClick={openModal} label="Registrar ponto" width="12.5rem" height='50px' />
                </ButtonContainer>
                {modalOpen && (
                    <ModalRegister openModal={openModal} closeModal={closeModal} refetch={refetch} />
                )}
                <ColumnContainer>
                    <div className="collaborator">Colaborador</div>
                    <div className="date">Data</div>
                    <div className="time">Hora</div>
                </ColumnContainer>
                <CardsContainer>
                    {currentItems &&
                        currentItems.map((item, index) => (
                            <Card key={index}>
                                <div className="collaborator-list">
                                    <p >{item.user.name}</p>
                                    <p className="collaborator-id">00{item.user.id}</p>
                                </div>
                                <div className="date-list">
                                    <p>{formatDate(item.created_at)}</p>
                                </div>
                                <div className="time-list">
                                    <p>{formatTime(item.created_at)}h</p>
                                </div>
                            </Card>
                        ))}
                </CardsContainer>
                <PaginationContainer>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </PaginationContainer>
            </TableContainer>
        </Main>
    );
}

export default User;
const Main = styled.div`
    display: flex;
    flex-direction: row;
    width: 99vw;
    height: 99vh;
    box-sizing: border-box;
    background-color: #f2f2f2;
      @media screen and (max-device-width: 480px) {
        display: flex;
        flex-direction: column;
    }
    `

const Menu = styled.div`
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
    background-color: #ffffff;
    z-index: 99999;
      @media screen and (max-device-width: 480px) {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    `
const Dashboard = styled.div`
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    border-left: 5px solid ${colors.PrimaryColor};
    padding: 30px;
    img {
        width: 8.2rem;
    }
     @media screen and (max-device-width: 480px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0;
        border: none;
    }
    `
const LogoutContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    margin: 20px;
    cursor: pointer;
    img {
        margin-right: 10px;
    }
     @media screen and (max-device-width: 480px) {
         position: relative;
        width: 100%;
        padding: 0;
    }
    `
const ButtonContainer = styled.div`
    margin: 20px 0 20px 0;
      @media screen and (max-device-width: 480px) {
        display: flex;
        justify-content: center;
    }
    `
const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: stretch;
    width: 100%;
    height: 85vh;
    margin: 15px;
    .collaborator {
        width: 415px;
    }
    .date {
        width: 250px;
    }
    .time {
        width: 60px;
    }
    .collaborator-list {
        width: 400px;
        border-left: 5px solid ${colors.SecondaryColor};
        padding-left: 5px;
        font-weight: 600;
    }
    .collaborator-id {
        font-size: small;
        font-weight: 300;
        color: ${colors.silver};
    }
    .date-list {
        width: 250px;
        color: ${colors.silver};
    }
    .time-list {
        width: 60px;
        color: ${colors.silver};
    }
      @media screen and (max-device-width: 480px) {
        margin: 0;
    }
`
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-weight: 500;
    color: ${colors.grey};
`
const CardsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
       @media screen and (max-device-width: 480px) {
        display: contents;
    }
`
const Card = styled.div`
    display: flex;
    justify-content:  start;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid silver;
    background-color: white;
`
const PaginationContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
      @media screen and (max-device-width: 480px) {
    position: static;
    align-items: center;
    margin-top: 10px;
}
`