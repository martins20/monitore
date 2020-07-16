import React from "react";
import { FaIndustry, FaPhoneAlt } from "react-icons/fa";

import { UserContainer, UserCard, Body, Company, Phone } from "./styles";

export default function Users({ users }) {
  return (
    <UserContainer>
      {users.map((user) => (
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
      ))}
    </UserContainer>
  );
}
