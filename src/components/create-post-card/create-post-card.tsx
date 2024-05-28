import { Button, Card, Skeleton, Space } from 'antd'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { loadingAtom,} from '../../store/global-atoms'
import TitleWithSubtitle from '../title-with-subtitle/title-with-subtitle'
import CreatePostModal from '../modals/create-post/create-post-modal'

interface CreatePostCardProps {
    onSuccessAction?: () => void;
}

const CreatePostCard = ({ onSuccessAction }: CreatePostCardProps) => {

    const [loading] = useAtom(loadingAtom)
    const [isOpenCreatePostModal, setOpenCreatePostModal] = useState<boolean>(false)

    return (
        <Card loading={loading}>
            <Skeleton loading={loading} avatar active>
                <Space direction={'vertical'}>
                    <TitleWithSubtitle title='Ne Düşünüyorsun?' subtitle='Düşüncelerini arkadaşlarınla paylaş' />
                    <Button icon={'+'} onClick={() => { setOpenCreatePostModal(true) }}>Gönderi Paylaş</Button>
                </Space>    
            </Skeleton>
            <CreatePostModal 
                open={isOpenCreatePostModal}
                onSuccessAction={()=>{
                    setOpenCreatePostModal(false)
                    onSuccessAction && onSuccessAction()
                }}
            />
        </Card>
    )
}

export default CreatePostCard