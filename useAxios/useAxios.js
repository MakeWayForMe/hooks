import defaultAxios from 'axios'; //npm i axios
import { useEffect, useState } from 'react';

export const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        console.log(state);
        setTrigger(Date())
    }
    useEffect(() => {
        if(!options.url) {
            return;
        }
        axiosInstance(options).then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error
            });
        });
    },[trigger]);
    return { ...state, refetch};
};