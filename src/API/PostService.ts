import axios from "axios";
import {Post, PostComment} from "../App";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })

        return response;
    }

    static async getById(id: number) {
        const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response;
    }

    static async getCommentsByPostId(id: number) {
        const response = await axios.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}