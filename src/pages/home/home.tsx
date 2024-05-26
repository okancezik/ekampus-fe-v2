import React from 'react'
import './home-module.css'
import { Col, Row } from 'antd'
import TimelineLayout from '../../layouts/timeline-layout/timeline-layout'
import SideMenu from '../../layouts/side-menu/side-menu'

const Home = () => {
    return (
        <Row className='container'>
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={0} md={4} lg={3}>
                <SideMenu />
            </Col>
            <Col xs={24} md={12} lg={8} className='timeline'>
                <TimelineLayout />
            </Col>
            <Col xs={0} md={4} lg={3} >3</Col>
            <Col xs={0} md={2} lg={5}></Col>
        </Row>)
}

export default Home