import { Button, Space } from 'antd'
import React, { useState } from 'react'
import TitleWithSubtitle from '../title-with-subtitle/title-with-subtitle'
import CreatePostModal from '../modals/create-post/create-post-modal'
import EKCard from '../ek-card/ek-card'

interface CreatePostCardProps {
    onSuccessAction?: () => void;
}

const CreatePostCard = ({ onSuccessAction }: CreatePostCardProps) => {
    const [isOpenCreatePostModal, setOpenCreatePostModal] = useState<boolean>(false)

    return (
        <EKCard>
            <>
                <Space direction={'vertical'}>
                    <TitleWithSubtitle title='Ne Düşünüyorsun?' subtitle='Düşüncelerini arkadaşlarınla paylaş' />
                    <Button icon={'+'} onClick={() => { setOpenCreatePostModal(true) }}>Gönderi Paylaş</Button>
                </Space>
                <CreatePostModal
                    open={isOpenCreatePostModal}
                    onSuccessAction={() => {
                        setOpenCreatePostModal(false)
                        onSuccessAction && onSuccessAction()
                    }}
                />
            </>
        </EKCard >
    )
}

export default CreatePostCard