import React, { useState } from 'react'
import './side-menu.css';
import logo from '../../assets/ekampus.png';
import { HomeOutlined, CompassOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EKAvatar from '../../components/ek-avatar/ek-avatar';
import { Image } from 'antd';
import CreatePostModal from '../../components/modals/create-post/create-post-modal';

const SideMenu = () => {

    const [isOpenCreatePostModal, setOpenCreatePostModal] = useState<boolean>(false)

    return (
        <div className='side-container'>
            <div className='header-container'>
                <Image src={logo} alt='logo' className='logo' style={{ height: "80px" }} />
                <div className='options-container'>
                    <div className='option'>
                        <HomeOutlined />
                        <span>Ana sayfa</span>
                    </div>
                    <div className='option'>
                        <CompassOutlined />
                        <span>Keşfet</span>
                    </div>
                    <div className='option'>
                        <SearchOutlined />
                        <span>Ara</span>
                    </div>
                    <div className='option' onClick={() => { setOpenCreatePostModal(true) }}>
                        <PlusCircleOutlined />
                        <span>Add</span>
                    </div>
                    <div className='option'>
                        <EKAvatar />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
            <div className='more-container'>
                more
            </div>
            <CreatePostModal open={isOpenCreatePostModal}/>
        </div>
    )
}

export default SideMenu