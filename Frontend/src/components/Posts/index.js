import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { Feeds, PostContainer, PostContent, Content } from "./styles";

export default function Posts({ posts, setPostId, setVisible }) {
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
    <Feeds>
      {posts &&
        posts.map((post) => {
          return (
            <PostContainer
              key={post.id}
              onClick={() => {
                setPostId(post.id);
                setVisible(true);
              }}
            >
              <PostContent>
                <header>
                  <FaUserCircle size={40} color={getRandomColor()} />
                  <Content>
                    <h2>{post.user.name}</h2>
                    <h3>{post.user.company}</h3>
                  </Content>
                </header>

                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </PostContent>
            </PostContainer>
          );
        })}
    </Feeds>
  );
}
