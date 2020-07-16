import React, { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import Drawer from "../../components/Drawer";
import Spinner from "../../components/Spinner";

import api from "../../services/api";
import Users from "../../components/Users";

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
            <Users users={users} />
          </>
        )}
      </Content>
    </Container>
  );
}
