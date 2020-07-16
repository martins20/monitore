import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  align-self: center;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  width: 290px;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1 {
      color: #6cdb2d;
      font-size: 20px;
      margin-bottom: 0;
    }

    small {
      color: #313131;
    }

    Link {
      display: flex;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  align-items: center;

  small {
    margin-top: 5px;
    color: #979aa6;
  }
`;

export const Company = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  color: #313131;
  margin-top: 20px;

  svg {
    color: #313131;
  }
`;

export const Phone = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  color: #313131;
  margin-top: 20px;

  svg {
    color: #313131;
  }
`;
