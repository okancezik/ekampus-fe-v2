import { Avatar, AvatarProps } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

interface EKAvatarProps extends AvatarProps{}

const EKAvatar = (props:EKAvatarProps) => {
  return (
    <Avatar icon={<UserOutlined />} {...props} />
  )
}

export default EKAvatar