import React from "react";

import { Container, Nav, NavItem } from "./styles";

export default function Pagination({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNavigateToNextPage = (number) => {
    setCurrentPage(number);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Nav>
        {pageNumbers.map((number) => (
          <NavItem
            onClick={() => handleNavigateToNextPage(number)}
            key={number}
            active={currentPage === number ? 1 : 0}
          >
            {number}
          </NavItem>
        ))}
      </Nav>
    </Container>
  );
}
