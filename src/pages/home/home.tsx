import React, { useEffect, useState } from 'react'
import './home-module.css'
import BaseLayout from '../../layouts/base-layout/base-layout'
import { useAtom } from 'jotai'
import { ListPostResponseModel } from '../../api/models/list-post-response-model'
import { messageAtom } from '../../store/global-atoms'
import { useAxiosServiceClient } from '../../services/axios'
import CreatePostCard from '../../components/create-post-card/create-post-card'
import { Flex } from 'antd'
import PostCard from '../../components/post-card/post-card'

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
            <Flex gap={"2rem"}>
                <div className='timeline_container'>
                    <CreatePostCard onSuccessAction={fetchPosts} />
                    {
                        posts.map((post) => {
                            return <PostCard data={post} />
                        })
                    }
                </div>
                <div>
                    <span>3</span>
                </div>
            </Flex>
        </BaseLayout>
    )
}

export default Home