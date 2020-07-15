import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const Content = styled.div`
  width: 83%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: ${(props) => (props.loading ? "center" : "")};
  align-items: ${(props) => (props.loading ? "center" : "")};
  margin-left: 350px;

  h1 {
    color: #000;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-top: 5px;
`;

export const UserCard = styled.div`
  padding: 0 30px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;

  hr {
    margin-bottom: 10px;
  }
`;

export const CardContent = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-weight: 700;
    margin-bottom: 5px;
  }

  h3 {
    color: #313131;
    font-size: 13px;
    font-weight: 700;
  }

  h4 {
    margin-top: 10px;
    color: #979aa6;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin-top: 20px;
    text-align: justify;
    color: #635e7b;
  }
`;
