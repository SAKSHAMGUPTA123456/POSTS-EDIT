import axios from 'axios'
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})
export const Api=()=>{
   return api.get("/posts")
}
export const deletepost=(id)=>{
    return api.delete(`/posts/${id}`)
}
export const post=(post)=>{
return api.post("/posts",post)
}
export const update=(id,post)=>{
    return api.put(`/posts/${id}`,post)
}