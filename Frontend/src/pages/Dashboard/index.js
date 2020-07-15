import React, { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import {
  Container,
  Content,
  Banner,
  FeedContainer,
  HeaderContainer,
  PostContainer,
  PostContent,
  Comments,
  UserContainer,
  UserCard,
} from "./styles";

import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";

import api from "../../services/api";

export default function Dashboard() {
  const [feeds, setFeeds] = useState([]);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleNavigate = (location) => {
    history.push(location);
  };

  useEffect(() => {
    setLoading(true);
    const handleGetData = async () => {
      const { data: posts } = await api.get("posts");
      setFeeds([
        posts[posts.length - 1],
        posts[posts.length - 2],
        posts[posts.length - 3],
      ]);

      const { data: users } = await api.get("users");

      setCount(users.length);
      setUsers([
        users[users.length - 1],
        users[users.length - 2],
        users[users.length - 3],
        users[users.length - 4],
        users[users.length - 5],
      ]);

      setLoading(false);
    };

    handleGetData();
  }, []);

  return (
    <Container>
      <Drawer Dashboard={true} />
      <Content loading={loading}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Dashboard</h1>

            <Banner onClick={() => console.log(feeds)}>
              <h1>Welcome Growth Tech !</h1>
              <span>
                You have <b>{count}</b> groups registered today.
              </span>

              <button onClick={() => handleNavigate("/users")}>
                Check now
              </button>
            </Banner>

            <HeaderContainer>
              <h3>Last Feeds</h3>
              <button onClick={() => handleNavigate("/feeds")}>View All</button>
            </HeaderContainer>
            <FeedContainer>
              {feeds.map((post) => (
                <PostContainer key={post.id}>
                  <PostContent>
                    <header>
                      <h2>{post.user.name}</h2>
                      <h3>{post.user.company}</h3>
                    </header>

                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </PostContent>
                </PostContainer>
              ))}
            </FeedContainer>

            <HeaderContainer>
              <h3>Last users</h3>
              <button onClick={() => handleNavigate("/users")}>View All</button>
            </HeaderContainer>
            <UserContainer>
              {users.map((user) => (
                <UserCard>
                  <p>
                    Username:
                    <b> {user.username} </b>
                  </p>
                  <p>
                    E-mail: <b> {user.email}</b>
                  </p>

                  <p>
                    company:
                    <b> {user.company.name} </b>
                  </p>
                </UserCard>
              ))}
            </UserContainer>
          </>
        )}
      </Content>
    </Container>
  );
}
