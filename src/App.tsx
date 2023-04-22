import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const raw = localStorage.getItem('isAuth') || 'false'
        setIsAuth(raw === 'true')
    }, [])

    useEffect(() => {
        localStorage.setItem('isAuth', isAuth.toString())
    }, [isAuth])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}


export interface Post {
    id: number;
    title: string
    body: string;
}

export interface PostComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface Filter {
    sort: string;
    query: string;
}

export default App;
