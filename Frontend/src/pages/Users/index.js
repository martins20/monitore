import React, { useState, useEffect } from "react";

import { Container, Content, Users, UserCard, CardContent } from "./styles";

import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";

import api from "../../services/api";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleGetData = async () => {
      const { data } = await api.get("users");
      setUsers(data);
      setLoading(false);
    };

    handleGetData();
  }, []);

  return (
    <Container>
      <Drawer Users />
      <Content loading={loading}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Users</h1>
            <Users>
              {users.map((user) => (
                <UserCard key={user.id}>
                  <CardContent>
                    <header>
                      <h2>{user.name}</h2>
                      <h3>{user.email}</h3>
                      <h3>{user.phone}</h3>
                    </header>

                    <h4>{user.company.name}</h4>
                    <p>{user.company.bs}</p>
                  </CardContent>
                </UserCard>
              ))}
            </Users>
          </>
        )}
      </Content>
    </Container>
  );
}
