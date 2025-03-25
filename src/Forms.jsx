import { useEffect, useState } from 'react'
import {Api} from './Axios'
import { deletepost } from './Axios'
import { Input } from './Input'
export const Forms=()=>{
    const [newdata,old]=useState([])
    const [newapi,oldapi]=useState([])
    const happy=async()=>{

        const fg=await Api()
        console.log(fg.data)
        old(fg.data)
    }
    useEffect(()=>{
     happy()
    },[])
    const handledelete=async(value)=>{
try{
const res=await deletepost(value)
if(res.status==200){
    
    const fg=await Api()
   const deleted=newdata.filter((curr)=>curr.id!=value)
   old(deleted)
}
}catch(error){
    console.log(error)
}
    }
    const handleupdate=(curr)=>{
oldapi(curr)
    }
    return(
<>
<div class="flex justify-center">
<Input newdata={newdata} old={old} newapi={newapi} oldapi={oldapi}/>
</div>
<div class="flex justify-center">
<div style={{ width:"850px"}} class=" grid grid-cols-1 md:grid-cols-3 mt-8">
{newdata.map((curr)=>{
    return(
        <div style={{border:"2px solid white",width:"250px"}} class="ml-7">
            <div style={{color:"white"}}>{curr.id}</div>
        <h1 style={{color:"white"}}>TITLE:{curr.title}</h1>
        <h1 style={{color:"white"}} class="mt-2">BODY:{curr.body}</h1>
        <div class="flex">
            <button class="" style={{backgroundColor:"green"}} onClick={()=>handleupdate(curr)}>EDIT</button>
            <button style={{backgroundColor:"red"}} class="ml-3" onClick={()=>handledelete(curr.id)}>DELETE</button>
        </div>
        </div>
    )
})}
</div>
</div>
</>
    )
}