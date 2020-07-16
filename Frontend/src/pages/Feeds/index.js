import React, { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";

import api from "../../services/api";
import Posts from "../../components/Posts";
import Pagination from "../../components/Pagination";

export default function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  useEffect(() => {
    setLoading(true);
    const handleGetData = async () => {
      const { data: posts } = await api.get("posts");
      setFeeds(posts);
      setLoading(false);
    };

    handleGetData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = feeds.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
      <Drawer Feeds />
      <Content loading={loading}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Feeds</h1>
            <Posts posts={currentPost} />
            <Pagination
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              totalPosts={feeds.length}
              currentPage={currentPage}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
