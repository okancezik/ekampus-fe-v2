import React from 'react'
import './base-layout.css'
import { Col, Row } from 'antd'
import TimelineLayout from '../timeline-layout/timeline-layout'
import Side from '../side-menu/side-menu'

const BaseLayout = () => {
    return (
        <Row className='base-container'>
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={0} md={4} lg={3}>
                <Side />
            </Col>
            <Col xs={24} md={12} lg={8} className='timeline'>
                <TimelineLayout />
            </Col>
            <Col xs={0} md={4} lg={3} >3</Col>
            <Col xs={0} md={2} lg={5}></Col>
        </Row>
    )
}

export default BaseLayout