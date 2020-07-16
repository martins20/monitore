import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  align-self: center;
  background: ${(props) => (props.loading ? "" : "#fff")};
  box-shadow: ${(props) =>
    props.loading
      ? ""
      : "0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.17)"};

  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

export const Feeds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

export const PostContainer = styled.div`
  padding: 0 30px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const PostContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h4 {
    color: #242544;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    text-align: justify;
    color: #635e7b;
    font-weight: 500;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
  }

  h3 {
    color: #313131;
    font-size: 13px;
    font-weight: 700;
  }
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
