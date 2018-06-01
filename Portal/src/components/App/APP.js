import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

import { Layout, Breadcrumb, BackTop, Icon, Menu, Row, Col } from 'antd';
import './APP.css';
import image from 'assets/github-for-atom.png';

const { Header, Content, Footer, Sider  } = Layout;

export default class App extends Component {


    greeting() {
        const href = window.location.href;
        console.log(href);
        if(href.indexOf('page1') > -1){
            return (
                getRouter()
            )
        }else{
            return (
                <Layout>
                    <Row>
                        <Header style={{ width: '100%' }}>
                        <Col xs={{ span: 0 }} lg={{ span: 3 }}>
                            <div className="logo" ></div>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 21 }}>
                            <Nav/>
                        </Col>
                        </Header>
                    </Row>
                    <Content style={{ padding: '0 50px'}}>
                        <BackTop />
                        {getRouter()}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <div>Copyright <Icon type="copyright" /> Cao Qiang </div>
                    </Footer>
                </Layout>
            )
        }
    }

    render() {
        return (
            // <Layout>
            //     <Header style={{ width: '100%' }}>
            //         <div className="logo" ></div>
            //         <Nav/>
            //     </Header>
            //     <Content style={{ padding: '0 50px'}}>
            //         <BackTop />
            //         {getRouter()}
            //     </Content>
            //     <Footer style={{ textAlign: 'center' }}>
            //         Ant Design ©2016 Created by CaoQ
            //     </Footer>
            //     {this.greeting()}
            // </Layout>
            this.greeting()
        )
    }
}
