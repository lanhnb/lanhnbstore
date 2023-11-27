import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import  reducer  from "./ProductReducer";
import { useParams } from "react-router-dom";
// import { url } from "./api";


const API = "http://localhost:5000/api/xklds";
 const API1 = "https://api.pujakaitem.com/api/products";

const AppContext = createContext();

const initialState ={
    isLoading: false,
    isError: false,
    xklds:[],
    isSingleLoading: false,
    singleXkld:{},
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const getXklds = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try{
        const res = await axios.get(url);
        const xklds = await res.data;
       
       
        dispatch({type:"SET_API_DATA", payload:xklds});
        }catch(error){
            dispatch({type:"API_ERROR"})
        }

    };
    // my 2nd api call for single product
    const getSingleXkld = async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url);
            const singleXkld = await res.data;
            
            dispatch({type:"SET_SINGLE_PRODUCT", payload:singleXkld});
            
        } catch (error) {
            dispatch({type:"SET_SINGLE_ERROR"})
            
        }
    }
    // const {id} = useParams();
    // useEffect(()=>{
    //     getSingleProduct(`${API}?id=${id}`);
    // }, []);

    useEffect(()=>{
        getXklds(API);
    },[]);

    return <AppContext.Provider value={{...state, getSingleXkld}}>
        {children}
        </AppContext.Provider>
};

//custom hooks
const useXkldContext = ()=>{
    return useContext(AppContext)
}
export {AppProvider, AppContext, useXkldContext}