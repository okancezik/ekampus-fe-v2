import React from 'react'
import './side-menu.css';
import logo from '../../assets/ekampus.png';
import { HomeOutlined, CompassOutlined, SearchOutlined } from '@ant-design/icons';
import EKAvatar from '../../components/ek-avatar/ek-avatar';

const SideMenu = () => {
    return (
        <div className='side-container'>
            <div className='header-container'>
                <img src={logo} alt='logo' className='logo' />
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
                    <div className='option'>
                        <EKAvatar />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
            <div className='more-container'>
                more
            </div>
        </div>
    )
}

export default SideMenu