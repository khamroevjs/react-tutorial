import React, {useState, useEffect} from 'react';
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import MyButton from "../components/UI/button/MyButton";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import {Post, Filter} from "../App";
import PostService from "../API/PostService";


function Posts() {
    const [posts, setPosts] = useState<Post[]>([])
    const [filter, setFilter] = useState<Filter>({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost: Post) => {
        setPosts([...posts, {...newPost, id: Date.now()}])
        setModal(false)
    }
    const removePost = (post: Post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postsError && <h1>Произошла ошибка {postsError}</h1>}
            {isPostsLoading ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> :
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про TS"}/>}
            <Pagination totalPages={totalPages} setPage={setPage} page={page}/>
        </div>
    );
}

export default Posts;
