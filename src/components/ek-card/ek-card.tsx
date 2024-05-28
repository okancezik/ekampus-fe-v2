import React from 'react'
import './ek-card-module.css'
import { Card, CardProps, Skeleton, } from 'antd'
import { useAtom } from 'jotai';
import { loadingAtom } from '../../store/global-atoms';
interface EKCardProps extends CardProps {
    children: JSX.Element;
}

const EKCard = (props: EKCardProps) => {

    const [loading] = useAtom(loadingAtom)

    return (
        <Card {...props} style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)" }}>
            <Skeleton loading={loading} avatar active>
                {props.children}
            </Skeleton>
        </Card>
    )
}

export default EKCard