import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 95%;
  background: #242544;
  border-radius: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

  align-items: center;

  position: fixed;
`;
export const Header = styled.div`
  margin-top: 60px;

  h1 {
    color: #fff;
    font-weight: 700;
    padding-bottom: 100px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  color: #fff;
  margin-bottom: 20px;
  transition: color 0.3s;

  border-left: ${(props) => (props.active ? "5px solid #6cd32c" : "")};

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
