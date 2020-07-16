import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: ${(props) => (props.loading ? "center" : "")};
  align-items: ${(props) => (props.loading ? "center" : "")};

  h1 {
    color: #000;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 20px;
  background: #fff;
  border-radius: 10px;

  span {
    font-size: 18px;
    font-weight: 500;
    color: #979aa6;

    b {
      color: #6cdb2d;
      font-size: 20px;
    }
  }

  button {
    width: 110px;
    font-size: 12px;
    font-weight: 700;
    background: #6cdb2d;
    color: #fff;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px;
    transition: filter 0.3s;

    :hover {
      filter: brightness(110%);
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  padding: 10px;

  button {
    background: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
    transition: all 0.3s;

    :hover {
      background: #6cdb2d;
      color: #fff;
    }
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  border: 1px solid red;

  margin-top: 5px;
`;

export const PostContainer = styled.div`
  padding: 0 30px;
  width: 500px;
  height: 250px;
  display: flex;
  margin: 20px 20px 0 0;

  flex-direction: column;

  background: #fff;
  border-radius: 10px;

  hr {
    margin-bottom: 10px;
  }
`;

export const PostContent = styled.div`
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

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 10px;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  width: 290px;
  height: 250px;
  margin: 20px 20px 0 0;
  border-radius: 10px;

  header {
    /* border: 1px solid red; */
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
