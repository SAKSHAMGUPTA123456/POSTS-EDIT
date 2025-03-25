import { useEffect, useState } from "react"
import { post } from "./Axios"
import { update } from "./Axios"
export const Input=({newdata,old,newapi,oldapi})=>{
const [first,second]=useState({
    title:"",
    body:"",
})
let isempty=Object.keys(newapi)==0
const handleinput=(e)=>{
const name=e.target.name
const value=e.target.value
second((prev)=>{return{...prev,[name]: value}})
}
const addpostdata=async()=>{
const res=await post(first)
if(first.title!=undefined){
old((prev)=>[...prev,])
}
second({
    title:"",
    body:""
})
}
const updatepost=async()=>{
const rg=await update(newapi.id,first)
const ids=newapi.id
const bgh={
    title:first.title,
    body:first.body,
    id:ids
}
old((prev)=>{return prev.map((curr)=>curr.id==ids?bgh:curr)})
second({
    title:"",
    body:""
})
oldapi({
})
}
const handlesubmit=(e)=>{
    e.preventDefault(); 
    const ert=e.nativeEvent.submitter.value
    if(ert=='EDIT'){
        updatepost()
    }
    else{
    addpostdata()
    }

}
useEffect(()=>{
second({
    title:newapi.title,
    body:newapi.body
})
},[newapi])
console.log(first)
    return(
        <>
        <div>
            <form onSubmit={handlesubmit}>
        <input type="text" name="title" onChange={handleinput} value={first.title}></input>
        <input type="text" class="ml-2" name="body" onChange={handleinput} value={first.body}></input>
        <button style={{backgroundColor:"red"}} value={isempty?'ADD':"EDIT"}>{isempty?"ADD":"EDIT"}</button>
        </form>
</div>
        </>
    )
}