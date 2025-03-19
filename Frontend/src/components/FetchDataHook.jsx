import { useEffect,useState } from "react";
import axios from "axios";

const FecthDataHook = ()=> {
    const [data,setdata] = useState([]);
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typincode.com/posts")
        .then((resultData)=> setdata(resData.data))
        .catch((err)=> console.error)
    })
}