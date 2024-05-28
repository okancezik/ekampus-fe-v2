import { Form, Input } from 'antd'
import React from 'react'
import { SignUpRequestModel } from '../../api/models/sign-up-request-model'
import FormLabel from '../../components/form-label/form-label'
import PrimaryButton from '../../components/primary-button/primary-button'
import { useAxiosServiceClient } from '../../services/axios'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../layouts/auth-layout/auth-layout'
import { useAtom } from 'jotai'
import { messageAtom } from '../../store/global-atoms'

const SignUp = () => {

    const navigate = useNavigate();
    const [, setMessage] = useAtom(messageAtom)
    const { AuthApi } = useAxiosServiceClient();

    const onFinish = (values: SignUpRequestModel) => {
        AuthApi.register(values).then((response) => {
            setMessage({ type: "success", message: "Kaydınız Başarıyla Oluşturuldu" })
            navigate('/')
        }).catch(() => {

            setMessage({ type: "error", message: "İşlem Başarısız" })
        })
    }

    return (
        <AuthLayout>
            <Form<SignUpRequestModel>
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
            >
                <FormLabel label="Ad">
                    <Form.Item
                        name="firstName"
                        rules={[{ required: true, message: 'Lütfen İlgili Alanı Doldurun' }]}
                    >
                        <Input size='large' />
                    </Form.Item>
                </FormLabel>
                <FormLabel label="Soyad">
                    <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Lütfen İlgili Alanı Doldurun' }]}
                    >
                        <Input size='large' />
                    </Form.Item>
                </FormLabel>
                <FormLabel label="Bölüm">
                    <Form.Item
                        name="departmantName"
                        rules={[{ required: true, message: 'Lütfen İlgili Alanı Doldurun' }]}
                    >
                        <Input size='large' />
                    </Form.Item>
                </FormLabel>
                <FormLabel label="Öğrenci Numarası">
                    <Form.Item
                        name="studentNumber"
                        rules={[{ required: true, message: 'Lütfen İlgili Alanı Doldurun' }]}
                    >
                        <Input size='large' />
                    </Form.Item>
                </FormLabel>
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
                    <PrimaryButton htmlType="submit" buttontext='Hesap Oluştur' style={{ backgroundColor: "black" }} />
                </Form.Item>
            </Form>
        </AuthLayout>)
}

export default SignUp