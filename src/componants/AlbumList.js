//import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAlbum } from "../redux/album/albumAction";

function AlbumList() {
    const dispatch = useDispatch();
    const {albums, loading, error} = useSelector((state)=>state.album)
    useEffect(()=>{
        dispatch(fetchAlbum())


    },[dispatch])
    //console.log(album)
    if (loading) return <div>Loading..</div>
    if (error) return <div>{error.message}</div>
  return (
    <div>
        <h1>My Album List</h1>
       { albums.map((al)=>(
            <div key={al.id}>
               {al.title} 
            </div>
        ))}
      
    </div>
  )
}

export default AlbumList
