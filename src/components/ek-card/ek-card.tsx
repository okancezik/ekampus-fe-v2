import React from 'react'
import { Avatar, Card, CardProps, Skeleton } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

interface EKCardProps extends CardProps{}

const EKCard = (props:EKCardProps) => {
    return (
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
    )
}

export default EKCard