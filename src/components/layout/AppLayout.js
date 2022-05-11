import React, { useState } from 'react';
import { Layout, Menu, Form, Input} from 'antd';
import {
    FacebookFilled, 
    CopyrightOutlined, 
    YoutubeFilled, 
    TwitterCircleFilled, 
    InstagramFilled,
    ShoppingCartOutlined,
    LoginOutlined
} from '@ant-design/icons';
import MovieList from '../movies/MovieList';
import './appLayout.css';




const { Header, Content, Footer } = Layout;


const AppLayout = (props) => {

    const [searchText, setSearchText] = useState("yatra");

    const onSearch = (value) => {
        setSearchText(value);
    }


    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    Moviesmandu
                </div>
                <Menu 
                    theme="dark" 
                    mode="horizontal" 
                    defaultSelectedKeys={[]}
                    style={{float:"left", display:"flex", marginLeft:"155px", fontSize:"1.5rem"}} 
                >
                    <Menu.Item key="1">Romance</Menu.Item>
                    <Menu.Item key="2">Thirller</Menu.Item>
                    <Menu.Item key="3">Comedy</Menu.Item>
                    <Menu.Item key="4">Action</Menu.Item>
                    <Menu.Item key="5">Drama</Menu.Item>
                    <Menu.Item key="6">Horror</Menu.Item>
                </Menu>
                <Form style={{float:"left"}}>
                    <Input.Search
                        onSearch={onSearch}  
                        type="text" 
                        placeholder="Enter Movie Name" 
                        style={{width:"80%", height:"25px", marginTop:"20px", marginLeft:"85px"}} 
                    />
                </Form>
                <LoginOutlined style={{paddingLeft:"20px", fontSize:"45px", float:"right", color:"white", marginTop:"10px"}}/>
                <ShoppingCartOutlined style={{fontSize:"45px", float:"right", color:"white", marginTop:"10px"}}/>
            </Header>

            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                <MovieList searchText={searchText}/>
            </div>
            </Content>
            
            <Footer style={{ textAlign: 'center' }}>
                <div className="link">
                    <FacebookFilled  className="link-item"/>
                    <InstagramFilled  className="link-item"/>
                    <TwitterCircleFilled  className="link-item"/>
                    <YoutubeFilled  className="link-item"/>
                </div>
                <CopyrightOutlined /> 2022 Moviesmandu Inc | All Rights Reserved.
            </Footer>
        </Layout>
    );
};

export default AppLayout;

