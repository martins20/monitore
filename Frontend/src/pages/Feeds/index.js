import React, { useState, useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";

import {
  Container,
  Content,
  Feeds,
  PostContainer,
  PostContent,
  Comments,
} from "./styles";

import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";

import api from "../../services/api";

export default function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleGetData = async () => {
      const { data: posts } = await api.get("posts");
      setFeeds(posts);
      setLoading(false);
    };

    handleGetData();
  }, []);

  return (
    <Container>
      <Drawer Feeds />
      <Content loading={loading}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Feeds</h1>
            <Feeds>
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
            </Feeds>
          </>
        )}
      </Content>
    </Container>
  );
}
