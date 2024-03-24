import React from 'react'
import './page-layout-module.css'
import SideMenu from '../side-menu/side-menu'
import TimelineLayout from '../timeline-layout/timeline-layout'

const PageLayout = () => {
  return (
    <div className='page_container'>
        <div className='page__nav'>
            <SideMenu/>
        </div>
        <div className='page__timeline'>
            <TimelineLayout/>
        </div>
    </div>
  )
}

export default PageLayout