import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Add from './add';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Employees', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Level 1', '3'),
    getItem('Level 2', '4'),
    getItem('Level 3', '5'),
    getItem('Level 4', '6'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Level 1', '6'), getItem('Level 2', '8'),getItem('Level 3', '9'),getItem('Level 4', '10')]),
  getItem('Settings', '11', <FileOutlined />),  getItem('Logout', '12', <FileOutlined />),
];

function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
             <Add/>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
        KiteCareer © {(new Date().getFullYear())} Created by Manikandan U K I
          </Footer>
        </Layout>
      </Layout>
    );
  };

export default Dashboard