import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {AuthContext, GlobalContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext<GlobalContext>(AuthContext)
    if (isAuth) {
        return (<Routes>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/posts/:id" element={<PostIdPage/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/error" element={<Error/>}></Route>
            <Route path="*" element={<Posts/>}></Route>
        </Routes>)
    }
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Login/>}/>
        </Routes>)
};

export default AppRouter;