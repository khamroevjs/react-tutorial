import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Post} from "../App";

interface Props {
    create: (newPost: Post) => void;
}

const PostForm = ({create}: Props) => {
    const [post, setPost] = useState<Post>({id: 0, title: '', body: ''})

    const addNewPost = (e: React.MouseEvent) => {
        e.preventDefault()
        if (post.title.trim() === '') {
            return
        }
        create(post)
        setPost({id: 0, title: '', body: ''})
    }

    return (
        <form>
            <MyInput type="text" placeholder="Название поста" value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type="text" placeholder="Описание поста" value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;