import React, { useState } from "react";
import { styled } from "styled-components";
import colors from "../constants/colors";
import Pagination from "../hooks/Pagination";
import users from "../constants/users.json"
import { goToLogin } from "../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const Admin = () => {
    const navigate = useNavigate()
    const { logout } = useAuth();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = users.users.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(users.users.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleLogout = () => {
        logout();
        goToLogin(navigate)
    };

    return (
        <Main>
            <Menu style={{ alignItems: 'center' }} bg="#ffffff.200" w="180px" h="98vh">
                <img style={{ width: '8.3rem', margin: '20px' }} src="img/imgLogoPontoGo.svg" alt="Logo PontoGo" />
                <Dashboard>
                    <img src="img/imgDashboard.svg" alt="Dashboard" />

                </Dashboard>
                <LogoutContainer onClick={handleLogout}>
                    <img src="img/imgLogout.svg" alt="Logout" />
                    <p>Sair</p>
                </LogoutContainer>
            </Menu>
            <TableContainer>
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
                                    <p >{item.colaborador}</p>
                                    <p className="collaborator-id" >{item.id}</p>
                                </div>
                                <div className="date-list">
                                    <p >{item.data}</p>
                                </div>
                                <div className="time-list">
                                    <p >{item.hora}</p>
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

export default Admin;
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
    @media screen and (max-device-width: 480px) {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    `
const Dashboard = styled.div`
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    border-left: 5px solid ${colors.PrincipalColor};
    padding: 40px;
    img {
        width: 7.2rem;
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
        width: 100%;
        padding: 0;
        position: relative;
    }
    `
const TableContainer = styled.div`
    width: 100%;
    margin: 15px;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: stretch;
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
        border-left: 5px solid ${colors.secundaryColor};
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
    flex: 1; /* Ocupar espaço disponível e empurrar o PaginationContainer para baixo */
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
    height: 30vh;
    @media screen and (max-device-width: 480px) {
    position: static;
    align-items: center;
    margin-top: 10px;
}
`