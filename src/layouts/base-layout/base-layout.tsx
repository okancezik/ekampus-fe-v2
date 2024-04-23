import React from 'react'
import './base-layout.css'
import { Col, Row } from 'antd'
import TimelineLayout from '../timeline-layout/timeline-layout'
import Side from '../side-menu/side-menu'

const BaseLayout = () => {
    return (
        <Row className='base-container'>
            <Col span={6}>
                <Side />
            </Col>
            <Col span={12}>
                <TimelineLayout />
            </Col>
            <Col span={6}>3</Col>
        </Row>
    )
}

export default BaseLayout