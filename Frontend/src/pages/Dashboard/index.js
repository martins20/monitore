import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Content, Banner, HeaderContainer } from "./styles";

import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";

import api from "../../services/api";
import Posts from "../../components/Posts";
import Users from "../../components/Users";

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
      <Content loading={loading ? 1 : 0}>
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
            <Posts posts={feeds} />

            <HeaderContainer>
              <h3>Last users</h3>
              <button onClick={() => handleNavigate("/users")}>View All</button>
            </HeaderContainer>
            <Users users={users} />
          </>
        )}
      </Content>
    </Container>
  );
}
