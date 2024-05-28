import React from 'react'
import './ek-card-module.css'
import { Card, CardProps, Flex, Skeleton, Space } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { ListPostResponseModel } from '../../api/models/list-post-response-model';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../store/global-atoms';
import EKAvatar from '../ek-avatar/ek-avatar';
import dayjs from 'dayjs';

interface EKCardProps extends CardProps {
    data: ListPostResponseModel;
}

const EKCard = ({ data }: EKCardProps) => {

    const [loading] = useAtom(loadingAtom)

    return (
        <Card
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Skeleton loading={loading} avatar active>
                <Flex gap={"1rem"}>
                    <EKAvatar />
                    <Space direction='vertical'size={"large"}>
                        <div style={{display:"flex",flexDirection:"column",gap:"0.3rem"}}> 
                            <span className='header'>{`${data.firstName} ${data.lastName}`}</span>
                            <span className='date'>{dayjs(data.loadDate).format('DD/MM/YYYY')}</span>
                        </div>
                        <span className='body'>{data.comment}</span>
                    </Space>
                </Flex>
            </Skeleton>
        </Card>
    )
}

export default EKCard