import React from 'react'
import { Form, Input, Modal, ModalProps } from 'antd'
import FormLabel from '../../form-label/form-label'
import PrimaryButton from '../../primary-button/primary-button'
import { useAtom } from 'jotai'
import { loadingAtom, messageAtom, userInfoAtom } from '../../../store/global-atoms'
import { useAxiosServiceClient } from '../../../services/axios'
import TitleWithSubtitle from '../../title-with-subtitle/title-with-subtitle'

interface CreatePostModalProps extends ModalProps {
    onSuccessAction?: () => void;
}

const CreatePostModal = (props: CreatePostModalProps) => {

    const [loading] = useAtom(loadingAtom)
    const { PostApi } = useAxiosServiceClient();
    const [userInfo] = useAtom(userInfoAtom)
    const [, setMessage] = useAtom(messageAtom)

    const onFinish = (values: { comment: string }) => {
        if (userInfo && userInfo.id) {
            const model = { studentId: userInfo?.id, comment: values.comment }
            console.log("model:", model)
            PostApi.Add(model).then((response) => {
                setMessage({
                    type: "success",
                    message: "Gönderi Başarıyla Paylaşıldı"
                })
                props.onSuccessAction && props.onSuccessAction();
            }).catch((err) => {
                setMessage({
                    type: "error",
                    message: "Gönderi Paylaşılamadı"
                })
            })
        }
    }

    return (
        <Modal {...props} footer={null}>
            <div className='sign-up-container'>
                <TitleWithSubtitle title='Gönderi Paylaş' subtitle='Haydi düşüncelerini, dileklerini arkadaşlarınla paylaş...' />
                <Form<{ comment: string }> layout='vertical' style={{ marginTop: "1.5rem" }} onFinish={onFinish}>
                    <FormLabel label='Ne düşünüyorsun ?'>
                        <Form.Item name={"comment"}>
                            <Input size='large' />
                        </Form.Item>
                    </FormLabel>
                    <Form.Item>
                        <PrimaryButton loading={loading} htmlType='submit' buttontext={"Paylaş"}></PrimaryButton>
                    </Form.Item>
                </Form>
            </div>
        </Modal>)
}

export default CreatePostModal