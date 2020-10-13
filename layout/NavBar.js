import React from "react";
import { Layout, Menu } from "antd";
import { css } from "emotion";
import clsx from "clsx";
const { Header } = Layout;

const styles = {
  header: css`
    background-color: blue;
  `,
  menu: { backgroundColor: "pink" },
  menuItem: css`
    background-color: red;
  `,
  menuItemBig: css`
    font-size: 30px;
  `,
};

export default ({}) => {
  return (
    <Header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={styles.menu}
      >
        <Menu.Item
          className={clsx(styles.menuItem, styles.menuItemBig)}
          key="1"
        >
          nav 1
        </Menu.Item>
        <Menu.Item className={styles.menuItem} key="2">
          nav 2
        </Menu.Item>
        <Menu.Item className={styles.menuItem} key="3">
          nav 3
        </Menu.Item>
      </Menu>
    </Header>
  );
};
