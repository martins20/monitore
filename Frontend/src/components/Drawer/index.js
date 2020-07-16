import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import { RiDashboardLine } from "react-icons/ri";
import { FiLayout, FiUsers } from "react-icons/fi";

import { Container, Header, ContentContainer, Item } from "./styles";

export default function Drawer({ Dashboard, Feeds, Users }) {
  const [width] = useWindowSize();

  return (
    <Container>
      <Header>
        <h1>Monitore</h1>
      </Header>

      <ContentContainer>
        <Item active={Dashboard ? 1 : 0} to="/">
          <RiDashboardLine size={30} />
          {width < 830 ? "" : <p>Dashboard</p>}
        </Item>

        <Item active={Feeds ? 1 : 0} to="/feeds">
          <FiLayout size={30} />
          {width < 830 ? "" : <p>Feeds</p>}
        </Item>

        <Item active={Users ? 1 : 0} to="/users">
          <FiUsers size={30} />
          {width < 830 ? "" : <p>Users</p>}
        </Item>
      </ContentContainer>
    </Container>
  );
}
