import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background: #242544;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: sticky;
  top: 0%;
`;

export const Header = styled.div`
  h1 {
    color: #fff;
    font-weight: 700;
    margin-left: 80px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? "  #6cd32c" : " #fff")};
  transition: color 0.3s;

  p {
    margin-left: 30px;
    font-weight: 700;
  }

  svg {
    margin-left: 50px;
  }

  :hover {
    color: #6cd32c;
  }
`;
