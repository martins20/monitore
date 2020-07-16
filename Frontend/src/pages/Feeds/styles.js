import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: ${(props) => (props.loading ? "center" : "")};
  align-items: ${(props) => (props.loading ? "center" : "center")};

  h1 {
    color: #000;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 10px;
    align-self: flex-start;
  }
`;
