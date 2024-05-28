import React from 'react'
import './login-module.css';
import { Flex, Form, Input } from 'antd'
import { AuthModel } from '../../api/models/auth-model'
import { useAxiosServiceClient } from '../../services/axios'
import { useAtom } from 'jotai'
import { messageAtom, userInfoAtom } from '../../store/global-atoms'
import FormLabel from '../../components/form-label/form-label'
import PrimaryButton from '../../components/primary-button/primary-button';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/auth-layout/auth-layout';

const Login = () => {

    const navigate = useNavigate();
    const { AuthApi } = useAxiosServiceClient();
    const [, setMessage] = useAtom(messageAtom);
    const [, setUserInfo] = useAtom(userInfoAtom);


    const onFinish = (values: AuthModel) => {
        console.log("values: ", values)
        AuthApi.login(values).then((response) => {
            setUserInfo({ id: response.data.data.id, username: `${response.data.data.firstName} ${response.data.data.lastName}` })
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
        <AuthLayout>
            <>
                <Form<AuthModel>
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <FormLabel label="Username">
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Lütfen İlgili Alanı Doldurun' }]}
                        >
                            <Input size='large' />
                        </Form.Item>
                    </FormLabel>
                    <FormLabel label="Password">
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Lütfen İlgili Alanı Doldurun' }]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>
                    </FormLabel>
                    <Form.Item>
                        <PrimaryButton htmlType="submit" buttontext='Giriş' style={{ backgroundColor: "black" }} />
                    </Form.Item>
                </Form>
                <Flex justify='center' className='footer'>
                    <span onClick={()=>{navigate('/sign')}}>
                        Hesap Oluştur
                    </span>
                </Flex>
            </>
        </AuthLayout>
    )
}

export default Login;