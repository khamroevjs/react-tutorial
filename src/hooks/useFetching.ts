import {useState} from 'react';

export const useFetching = (callback: (...params: any) => Promise<any>): [(...params: any) => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const fetching = async (...params: any) => {
        try {
            setIsLoading(true)
            await callback(params)
        } catch (e) {
            setError((e as Error).message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}