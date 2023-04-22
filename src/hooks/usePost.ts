import {Post} from "../App";
import {useMemo} from "react";

export const useSortedPosts = (posts: Post[], sort: string) => {
    const sortedPosts = useMemo(() => {
        if (sort === '') {
            return posts;
        }
        return [...posts].sort((a, b) => {
            if (sort === 'title') {
                return a.title.localeCompare(b.title)
            }
            return a.body.localeCompare(b.body)
        })
    }, [sort, posts])
    return sortedPosts;
}

export const usePosts = (posts: Post[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);
}