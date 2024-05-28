import React from 'react'
import './base-layout-module.css'
import { Col, Row } from 'antd'
import SideMenu from '../side-menu/side-menu'

interface BaseLayoutProps {
    children: JSX.Element;
}

const BaseLayout = (props: BaseLayoutProps) => {
    return (
        <Row className='container'>
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={0} md={4} lg={3}>
                <SideMenu />
            </Col>
            <Col xs={24} md={12} lg={8}>
                {props.children}
            </Col>
            <Col xs={0} md={4} lg={3} >3</Col>
            <Col xs={0} md={2} lg={5}></Col>
        </Row>
    )
}

export default BaseLayout