import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-self: center;
  margin-bottom: 20px;
  transition: all 0.3;
`;

export const NavItem = styled.li`
  padding: 5px 10px;
  background: ${(props) => (props.active ? "#6cdb2d" : "#fff")};
  border-radius: 5px;
  margin-right: 5px;
  color: ${(props) => (props.active ? "#fff" : "#6cdb2d")};
  font-weight: 700;
  cursor: pointer;

  :hover {
    background: #6cdb2d;
    color: #fff;
  }
`;
