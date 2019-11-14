import React from 'react'
import {useState,useEffect} from 'react';
 function Photos() {
const [data,setData]=useState([]);
useEffect(()=>{
fetch('https://picsum.photos/200')
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
})
})
    return (
        <div>
            the photos
        </div>
    )
}

export default Photos;