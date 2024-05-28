import React, { useState } from 'react'
import './side-menu.css';
import logo from '../../assets/ekampus.png';
import { HomeOutlined, CompassOutlined, SearchOutlined, PlusCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import EKAvatar from '../../components/ek-avatar/ek-avatar';
import { Image } from 'antd';
import CreatePostModal from '../../components/modals/create-post/create-post-modal';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { messageAtom } from '../../store/global-atoms';

const SideMenu = () => {
    const navigate = useNavigate();
    const [,setMessage] = useAtom(messageAtom)
    const [isOpenCreatePostModal, setOpenCreatePostModal] = useState<boolean>(false)

    return (
        <div className='side-container'>
            <div className='header-container'>
                <Image src={logo} alt='logo' className='logo' style={{ height: "80px" }} />
                <div className='options-container'>
                    <div className='option' onClick={()=>navigate('/home')}>
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
                    <div className='option' onClick={() => { navigate('/profile') }}>
                        <EKAvatar />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
            <div className='more-container' onClick={() => {
                setMessage({type:"success",message:"Çıkış Yapıldı"})
                navigate('/')
            }}>
                <LogoutOutlined />
                <span>Çıkış Yap</span>
            </div>
            <CreatePostModal open={isOpenCreatePostModal} />
        </div>
    )
}

export default SideMenu