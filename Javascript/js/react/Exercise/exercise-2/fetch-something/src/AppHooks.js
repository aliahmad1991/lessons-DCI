import React,{useState,useEffect} from 'react';
import './App.css';
export default function AppHooks() {
    const [personInfo,setPersonInfo]=useState([]);
    useEffect(()=>{
        // the same code inside componentDidMount
        let initialPersonInfos =[];
        fetch("https://swapi.co/api/people/")
        .then(res => res.json())
        .then(data => {
          initialPersonInfos=data.results;
          console.log(initialPersonInfos)
          setPersonInfo(initialPersonInfos)
    })
},[])
let allData=personInfo.map((item)=>{
    return(
         <div className="card">
        <h3><b>The Name :</b>{item.name}</h3>
        <h3><b>Height:</b>{item.height}</h3>
        <h3><b>Mass :</b>{item.mass}</h3>

        </div>
    )
})
    return (
        <div className="App">
            <div>  {allData}</div>
        </div>
    )
}
