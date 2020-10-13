import React from "react";
import { Layout, Menu } from "antd";
import { css } from "emotion";
const { Header } = Layout;

const styles = {
  header: css`
    background-color: blue;
  `,
};

export default ({}) => {
  return (
    <Header className={styles.header}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};
