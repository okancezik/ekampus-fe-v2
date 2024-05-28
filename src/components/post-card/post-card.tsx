import React from 'react'
import { ListPostResponseModel } from '../../api/models/list-post-response-model'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import EKCard from '../ek-card/ek-card';
import { Flex, Space } from 'antd';
import EKAvatar from '../ek-avatar/ek-avatar';
import dayjs from 'dayjs';

interface PostCardProps {
    data: ListPostResponseModel;
}

const PostCard = ({ data }: PostCardProps) => {
    return (
        <EKCard
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Flex gap={"1rem"}>
                <EKAvatar />
                <Space direction='vertical' size={"large"}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        <span className='header'>{`${data.firstName} ${data.lastName}`}</span>
                        <span className='date'>{dayjs(data.loadDate).format('DD/MM/YYYY')}</span>
                    </div>
                    <span className='body'>{data.comment}</span>
                </Space>
            </Flex>
        </EKCard>
    )
}

export default PostCard