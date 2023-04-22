import React from 'react';
import {Post} from "../App";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

export interface PostItemProps {
    remove: (post: Post) => void;
    number: number;
    post: Post
}

const PostItem = ({remove, number, post}: PostItemProps) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;