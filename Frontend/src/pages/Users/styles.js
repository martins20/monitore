import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: ${(props) => (props.loading ? "center" : "")};
  align-items: ${(props) => (props.loading ? "center" : "")};

  h1 {
    color: #000;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 10px;
    align-self: flex-start;
  }
`;
