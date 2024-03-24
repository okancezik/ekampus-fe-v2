import React from 'react'
import './side-menu-module.css'
import { HomeOutlined, CompassOutlined, SearchOutlined } from '@ant-design/icons';
import EKAvatar from '../../components/ek-avatar/ek-avatar';
import ekampus from "../../assets/ekampus.png";

const SideMenu = () => {
    return (
        <div className='side_container'>
            <img src={ekampus} alt='logo' className='logo' />
            <div className='side__buttons'>
                <button className='sidenav__button'>
                    <HomeOutlined style={{ fontSize: '1.5rem' }} />
                    <span>Home</span>
                </button>
                <button className='sidenav__button'>
                    <CompassOutlined style={{ fontSize: '1.5rem' }} />
                    <span>Explore</span>
                </button>
                <button className='sidenav__button'>
                    <SearchOutlined style={{ fontSize: '1.5rem' }} />
                    <span>Search</span>
                </button>
                <button className='sidenav__button'>
                    <EKAvatar />
                    <span>Profile</span>
                </button>
            </div>
            <div className='sidenav__more'>
                <button className='sidenav__button'>
                    More
                </button>
            </div>
        </div>
    )
}

export default SideMenu