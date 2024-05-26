import React from 'react'
import { Avatar, Card, CardProps, Skeleton } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { ListPostResponseModel } from '../../api/models/list-post-response-model';
import { useAtom } from 'jotai';
import { loadingAtom } from '../../store/global-atoms';

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
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                    title={data.comment}
                    description={data.loadDate}
                />
            </Skeleton>
        </Card>
    )
}

export default EKCard