import styled from "styled-components";

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
`;

export const PostContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-weight: 700;
  }

  h3 {
    color: #313131;
    font-size: 13px;
    font-weight: 700;
  }

  h4 {
    color: #979aa6;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    text-align: justify;
    color: #635e7b;
  }
`;
