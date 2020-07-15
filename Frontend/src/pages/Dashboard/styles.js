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
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.loading ? "center" : "")};
  align-items: ${(props) => (props.loading ? "center" : "")};
  width: 83%;

  margin-left: 350px;

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
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`;

export const PostContainer = styled.div`
  padding: 0 30px;
  width: 31%;
  height: 250px;
  display: flex;
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
  /* background: #fff; */
  border-radius: 10px;
  justify-content: space-between;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  width: 290px;
  height: 250px;
  border-radius: 10px;
`;
