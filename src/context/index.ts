import {createContext} from 'react'

export interface GlobalContext {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}

export const AuthContext = createContext<GlobalContext>({
    isAuth: false,
    setIsAuth: () => {
    }
});