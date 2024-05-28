import React, { useEffect, useState } from 'react'
import './timeline-layout-module.css'
import EKCard from '../../components/ek-card/ek-card'
import { useAxiosServiceClient } from '../../services/axios'
import { ListPostResponseModel } from '../../api/models/list-post-response-model'
import { useAtom } from 'jotai'
import { messageAtom } from '../../store/global-atoms'
import CreatePostCard from '../../components/create-post-card/create-post-card'

const TimelineLayout = () => {

  const [, setMessage] = useAtom(messageAtom)
  const [posts, setPosts] = useState<ListPostResponseModel[]>([]);
  const { PostApi } = useAxiosServiceClient();

  const fetchPosts = () => {
    PostApi.GetAllPosts().then((response) => {
      setPosts(response.data.data)
    }).catch(() => {
      setMessage({ type: "error", message: "Gönderiler Listelenemedi" })
    })
  }

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='timeline_container'>
      <CreatePostCard onSuccessAction={fetchPosts} />
      {
        posts.map((post) => {
          return <EKCard data={post} />
        })
      }
    </div>

  )
}

export default TimelineLayout