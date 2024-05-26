import React, { useEffect, useState } from 'react'
import './timeline-layout-module.css'
import EKCard from '../../components/ek-card/ek-card'
import { useAxiosServiceClient } from '../../services/axios'

const TimelineLayout = () => {

  const [posts,setPosts] = useState([]); 
  const {PostApi} = useAxiosServiceClient(); 

  useEffect(()=>{
    PostApi.GetAllPosts().then((response)=>{setPosts(response.data.data)}).catch(()=>{})
  },[])

  return (
    <div className='timeline_container'>
      {
        posts.map((post) => {
          return <EKCard />
        })
      }
    </div>
    
  )
}

export default TimelineLayout