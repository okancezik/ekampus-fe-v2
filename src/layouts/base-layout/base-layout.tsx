import { Col, Row } from 'antd'
import React from 'react'
import SideMenu from '../side-menu/side-menu'
import TimelineLayout from '../timeline-layout/timeline-layout'

const BaseLayout = () => {
  return (
    <Row>
        <Col span={6}>
        <SideMenu/>
        </Col>
        <Col span={12}>
        <TimelineLayout/>
        </Col>
        <Col span={6}>3</Col>
    </Row>
  )
}

export default BaseLayout