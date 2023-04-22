import React from 'react';
import PostItem, {PostItemProps} from "./PostItem";
import {Post} from "../App";

interface PostListProps {
    remove: (post: Post) => void;
    posts: Post[];
    title: string;
}

const PostList = ({remove, posts, title}: PostListProps) => {
    if (posts.length === 0) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;