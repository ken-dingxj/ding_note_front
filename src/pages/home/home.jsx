import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd';
import './home.less'
import HeadMain from '@/components/header/header'
import ContentMain from '@/components/content/content'

const { Header, Footer, Sider, Content } = Layout;


class HOME extends React.Component{
    render() {
        return(
            <div className="home-container">
                <Layout>
                    <Header ><HeadMain></HeadMain></Header>
                    <Content ><ContentMain></ContentMain></Content>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
}

export default connect()(HOME)
