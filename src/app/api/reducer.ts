import {useEffect, useReducer} from "react";
import {AxiosPromise} from "axios";

interface State<P> {
    data?: P
    isError: boolean
    isLoading: boolean
}

interface Action<P> {
    type: 'FETCH_INIT' | 'FETCH_ERROR' | 'FETCH_SUCCESS'
    payload?: P
}

const fetchReducer = <P>(state: State<P>, action: Action<P>): State<P> => {
    switch (action.type) {
        case "FETCH_INIT":
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isError: false,
                isLoading: false
            }
        default:
            throw new Error("Unknown error was encountered while fetching content.")
    }
}

export const useFetchAPI = <P, T>(initData: P, supplier: () => AxiosPromise<T>, dependencyList:ReadonlyArray<any>=[], transformer?: (data:T) => P) => {
    const [state, dispatch] = useReducer(
        fetchReducer,
        {
            data: initData,
            isError: false,
            isLoading: false
        }
    )
    useEffect(() => {
        const promise = supplier()
        dispatch({type: 'FETCH_INIT'})
        promise.then(response => {
            if (response.status >= 200 && response.status < 300) {
                dispatch({type: 'FETCH_SUCCESS', payload: transformer(response.data)})
            } else {
                dispatch({type: 'FETCH_ERROR'})
            }
        }).catch(error => {
            dispatch({type: 'FETCH_ERROR'})
            console.log(error)
        })
    }, dependencyList)
    return state
}



