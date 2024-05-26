import React from 'react'
import './login-module.css';
import {  Col, Form, Input, Row } from 'antd'
import { AuthModel } from '../../api/models/auth-model'
import { useAxiosServiceClient } from '../../services/axios'
import { useAtom } from 'jotai'
import { messageAtom, userInfoAtom } from '../../store/global-atoms'
import FormLabel from '../../components/form-label/form-label'
import PrimaryButton from '../../components/primary-button/primary-button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const { AuthApi } = useAxiosServiceClient();
    const [, setMessage] = useAtom(messageAtom);
    const [, setUserInfo] = useAtom(userInfoAtom);


    const onFinish = (values: AuthModel) => {
        console.log("values: ", values)
        AuthApi.login(values).then((response) => {
            setUserInfo({ id: response.data.data.id, username: `${response.data.data.firstName} ${response.data.data.lastName}`})
            setMessage({
                type: "success",
                message: "Hoş Geldiniz."
            })
            navigate('/home')
        }).catch((err) => setMessage({
            type: "error",
            message: "Kullanıcı Bulunamadı"
        }))
    }

    return (
        <Row className='container'>
            <Col span={7}></Col>
            <Col span={10} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className={"login-form"}>
                    <Form<AuthModel>
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                        style={{width:"80%"}}
                    >
                        <FormLabel label="Username">
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input size='large'/>
                            </Form.Item>
                        </FormLabel>
                        <FormLabel label="Password">
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password size='large'/>
                            </Form.Item>
                        </FormLabel>
                        <Form.Item>
                            <PrimaryButton htmlType="submit" buttontext='Giriş' />
                        </Form.Item>
                    </Form>
                </div>
            </Col>

            <Col span={7}></Col>
        </Row>

    )
}

export default Login;