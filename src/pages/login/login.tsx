import { Button, Form, Input } from 'antd'
import React from 'react'
import { AuthModel } from '../../api/models/auth-model'
import { useAxiosServiceClient } from '../../services/axios'

const Login = () => {

    const { AuthApi } = useAxiosServiceClient();

    const onFinish = (values: AuthModel) => {
        console.log("values: ", values)
        AuthApi.login(values).then((response) => console.log("RESPONSE: ", response)).catch((err) => console.log("error: ", err))
    }

    return (
        <Form<AuthModel>
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;