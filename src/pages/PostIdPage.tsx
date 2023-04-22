import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {Post, PostComment} from "../App";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState<Post>({} as Post)
    const [comments, setComments] = useState<PostComment[]>()
    const [fetchPostById, isLoading, error] = useFetching(async (id: number) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id: number) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        const idStr = params['id'] || '0'
        fetchPostById(parseInt(idStr))
        fetchComments(parseInt(idStr))
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params['id']}</h1>
            {isLoading ? <Loader/>
                : <div>{post.id} {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading ? <Loader/> : <div>
                {comments?.map(comment =>
                    <div key={comment.id} style={{marginTop: 15}}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>)}
            </div>}
        </div>
    );
};

export default PostIdPage;