import React, { useEffect, useState } from "react";
import { FaUserCircle, FaIndustry, FaPhoneAlt } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

import {
  Container,
  Content,
  PostContainer,
  PostContent,
  HeaderContent,
  CloseButtonContainer,
  UserCard,
  Body,
  Company,
  Phone,
} from "./styles";

import api from "../../services/api";
import Spinner from "../Spinner";

export default function Modal({ visible, setVisible, userId, postId }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setLoading(true);
    const handleGetData = async () => {
      if (postId) {
        if (post && post.id === postId) return setLoading(false);
        const { data } = await api.get(`posts/${postId}`);
        setPost(data);
        setLoading(false);
      }

      if (userId) {
        if (user && user.id === userId) return setLoading(false);
        const { data } = await api.get(`users/${userId}`);
        setUser(data);
        setLoading(false);
      }
    };

    handleGetData();
  }, [userId, postId]);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      if (color === "#fff" || color === "#000") {
        color = "#";
        color += letters[Math.floor(Math.random() * 16)];
      }
    }
    return color;
  }
  return (
    <Container visible={visible ? 1 : 0}>
      <Content loading={loading ? 1 : 0}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <CloseButtonContainer>
              <GrFormClose
                size={30}
                onClick={() => {
                  setVisible(false);
                }}
              />
            </CloseButtonContainer>
            {post && (
              <PostContainer key={post.id}>
                <PostContent>
                  <header>
                    <FaUserCircle size={40} color={getRandomColor()} />
                    <HeaderContent>
                      <h2>{post.user.name}</h2>
                      <h3>{post.user.company}</h3>
                    </HeaderContent>
                  </header>

                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </PostContent>
              </PostContainer>
            )}
            {user && (
              <UserCard key={user.id}>
                <header>
                  <h1>{user.name}</h1>
                  <small>
                    {user.username} | {user.email}
                  </small>
                </header>

                <Body>
                  <Company>
                    <FaIndustry size={20} /> <h2>{user.company.name} </h2>
                  </Company>
                  <small>{user.company.catchPhrase}</small>
                  <Phone>
                    <FaPhoneAlt size={20} />
                    <h4>{user.phone}</h4>
                  </Phone>
                </Body>
              </UserCard>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}
