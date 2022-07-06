import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
/**
 * Import all page components here
 */
import MemoPage from '../pages/MemoPage';
import LoginPage from '../pages/LoginPage';

const { Header, Sider, Content } = Layout;


export const Rrouters = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    return (
        <>
        <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <FormOutlined />,
                                label: 'Memo Page',
                                onClick: () => {navigate('/memo')},
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                            <Route path='/' element={<LoginPage/>}></Route>
                            <Route path='/memo' element={<MemoPage/>}></Route>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Rrouters;