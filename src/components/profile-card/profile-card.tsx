import React from 'react'
import EKCard from '../ek-card/ek-card'
import { Flex, Space } from 'antd'
import EKAvatar from '../ek-avatar/ek-avatar'
import { ListStudentResponseModel } from '../../api/models/list-student-response-model'

interface ProfileCardProps{
    data:ListStudentResponseModel;
}

const ProfileCard = ({data}:ProfileCardProps) => {
    return (
        <EKCard>
            <Flex gap={"3rem"}> 
                <EKAvatar style={{ height: "80px", width: "80px" }} />
                <Space direction='vertical'>
                    <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>{`${data.firstName} ${data.lastName}`}</span>
                    <span>{`${data.departmantName} ${data.studentNumber}`}</span>
                </Space>

            </Flex>
        </EKCard>
    )
}

export default ProfileCard