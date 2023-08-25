import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../constants/colors"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <PageNumber
        key={i}
        onClick={() => onPageChange(i)}
        selected={currentPage === i}
      >
        {i}
      </PageNumber>
    );
  }

  return (
    <PaginationContainer>
      <NavigationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <FaChevronLeft style={{ margin: '4px 0 4px 0' }} />
      </NavigationButton>
      {pageNumbers}
      <NavigationButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <FaChevronRight style={{ margin: '4px 0 4px 0' }} />
      </NavigationButton>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`
const NavigationButton = styled.button`
  border: 1px solid ${colors.grey};
  outline: none;
  background-color: transparent;
  color: ${colors.grey};
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: ${colors.silver};
  }
  &:disabled {
    color: ${colors.silver};
    cursor: not-allowed;
  }
  `;

const PageNumber = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ selected }) => (selected ? `${colors.grey}` : `${colors.silver}`)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover{
    color: ${colors.grey};
  }
`;
// const PageLabel = styled.span`
//   margin-right: 5px;
//   font-weight: 600;
// `;