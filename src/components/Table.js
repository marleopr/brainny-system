// import { useState } from "react";
// import { styled } from "styled-components"
// import colors from "../constants/colors"
// import Pagination from "../hooks/Pagination"
// import users from "../constants/users.json"

// const Table = () => {

//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 9;
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//     const currentItems = users.users.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(users.users.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <TableContainer>
//             <ColumnContainer>
//                 <div className="collaborator">Colaborador</div>
//                 <div className="date">Data</div>
//                 <div className="time">Hora</div>
//             </ColumnContainer>
//             <CardsContainer>
//                 {currentItems &&
//                     currentItems.map((item, index) => (
//                         <Card key={index}>
//                             <div className="collaborator-list">
//                                 <p >{item.colaborador}</p>
//                                 <p className="collaborator-id" >{item.id}</p>
//                             </div>
//                             <div className="date-list">
//                                 <p >{item.data}</p>
//                             </div>
//                             <div className="time-list">
//                                 <p >{item.hora}</p>
//                             </div>
//                         </Card>
//                     ))}
//             </CardsContainer>
//             <PaginationContainer>
//                 <Pagination
//                     currentPage={currentPage}
//                     totalPages={totalPages}
//                     onPageChange={handlePageChange}
//                 />
//             </PaginationContainer>
//         </TableContainer>
//     )
// }
// export default Table

// const TableContainer = styled.div`
//     width: 100%;
//     margin: 15px;
//     height: 85vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between; 
//     align-items: stretch;
//     .collaborator {
//         width: 415px;
//     }
//     .date {
//         width: 250px;
//     }
//     .time {
//         width: 60px;
//     }
//     .collaborator-list {
//         width: 400px;
//         border-left: 5px solid ${colors.secundaryColor};
//         padding-left: 5px;
//         font-weight: 600;
//     }
//     .collaborator-id {
//         font-size: small;
//         font-weight: 300;
//         color: ${colors.silver};
//     }
//     .date-list {
//         width: 250px;
//         color: ${colors.silver};
//     }
//     .time-list {
//         width: 60px;
//         color: ${colors.silver};
//     }
//     @media screen and (max-device-width: 480px) {
//         margin: 0;
//     }
// `
// const ColumnContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: start;
//     font-weight: 500;
//     color: ${colors.grey};
// `
// const CardsContainer = styled.div`
//     flex: 1; /* Ocupar espaço disponível e empurrar o PaginationContainer para baixo */
//     display: flex;
//     flex-direction: column;
//     @media screen and (max-device-width: 480px) {
//         display: contents;
//     }
// `
// const Card = styled.div`
//     display: flex;
//     justify-content:  start;
//     align-items: center;
//     padding: 10px;
//     margin-top: 10px;
//     border: 1px solid silver;
//     background-color: white;
// `
// const PaginationContainer = styled.div`
//     display: flex;
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     height: 30vh;
//     @media screen and (max-device-width: 480px) {
//     position: static;
//     align-items: center;
//     margin-top: 10px;
// }
// `