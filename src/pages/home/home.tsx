import React, { useEffect, useState } from 'react'
import './home-module.css'
import BaseLayout from '../../layouts/base-layout/base-layout'
import { useAtom } from 'jotai'
import { ListPostResponseModel } from '../../api/models/list-post-response-model'
import { messageAtom } from '../../store/global-atoms'
import { useAxiosServiceClient } from '../../services/axios'
import EKCard from '../../components/ek-card/ek-card'
import CreatePostCard from '../../components/create-post-card/create-post-card'

const Home = () => {

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
        <BaseLayout>
            <div className='timeline_container'>
                <CreatePostCard onSuccessAction={fetchPosts} />
                {
                    posts.map((post) => {
                        return <EKCard data={post} />
                    })
                }
            </div>
        </BaseLayout>
    )
}

export default Home