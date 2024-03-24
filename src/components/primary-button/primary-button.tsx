import { Button, ButtonProps, ConfigProvider } from 'antd'
import React from 'react'

interface PrimaryButtonProps extends ButtonProps{
    children?: any;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <ConfigProvider>
        <Button color='primary'>
            {props.children}
        </Button>
    </ConfigProvider>
  )
}

export default PrimaryButton