import React, { useEffect, useState } from 'react'
import BaseLayout from '../../layouts/base-layout/base-layout'
import ProfileCard from '../../components/profile-card/profile-card'
import { useAxiosServiceClient } from '../../services/axios'
import { useAtom } from 'jotai'
import { messageAtom, userInfoAtom } from '../../store/global-atoms'
import { ListStudentResponseModel } from '../../api/models/list-student-response-model'
import { ListPostResponseModel } from '../../api/models/list-post-response-model'
import PostCard from '../../components/post-card/post-card'
import './profile-module.css'

const Profile = () => {

    const [userInfo] = useAtom(userInfoAtom)
    const [, setMessage] = useAtom(messageAtom)
    const [posts, setPosts] = useState<ListPostResponseModel[]>([]);
    const { StudentApi, PostApi } = useAxiosServiceClient();
    const [student, setStudent] = useState<ListStudentResponseModel | undefined>(undefined)

    useEffect(() => {
        if (userInfo?.id) {
            fetchStudentDetail(Number(userInfo.id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo?.id])

    useEffect(() => {
        if (student && student?.studentNumber.length > 0) {
            console.log("stunum: ",student.studentNumber)
            fetchStudentPosts(student.studentNumber)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student])

    const fetchStudentDetail = (id: number) => {
        StudentApi.getStudentDetails(id).then((response) => {
            setStudent(response.data.data)
        })
            .catch(() => { })
    }

    const fetchStudentPosts = async (studentNumber: string) => {
        await PostApi.GetStudentPosts(studentNumber).then((response) => {
            setPosts(response.data.data)
        }).catch(() => {
            setMessage({
                type: "error",
                message: "Gönderiler Listelenemedi!"
            })
        })
    }

    return (
        <BaseLayout>
            <>
                {
                    student &&
                    <>
                        <ProfileCard data={student} />
                        <div className='timeline_container'>
                            {
                                posts.map((post) => {
                                    return <PostCard data={post} />
                                })
                            }
                        </div>
                    </>
                }
            </>
        </BaseLayout>
    )
}

export default Profile