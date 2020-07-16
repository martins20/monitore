import React from "react";

import { Feeds, PostContainer, PostContent } from "./styles";

export default function Posts({ posts }) {
  return (
    <Feeds>
      {posts.map((post) => (
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
  );
}
