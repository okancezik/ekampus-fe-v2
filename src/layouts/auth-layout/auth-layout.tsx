import { Col, Row } from 'antd'
import React from 'react'
import logo from '../../assets/ekampus.png'

interface AuthLayoutProps{
    children:JSX.Element;
}

const AuthLayout = (props:AuthLayoutProps) => {
    return (
        <Row className='container' style={{ height: "100vh" }}>
            <Col span={7}></Col>
            <Col span={10} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className={"body"}>
                    <img src={logo} alt="logo" />
                    {props.children}
                </div>
            </Col>

            <Col span={7}></Col>
        </Row>
    )
}

export default AuthLayout