import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import AlbumsUsers from "../AlbumsUsers/AlbumsUsers";

const Albums = () => {
    let {id} = useParams();

    let [albums,setAlbums] = useState([])


    useEffect(()=>{
        userService.getByIdAlbums(id).then(value => setAlbums(value));
    },[id])

    return (
        <div>
            {albums.map(album => <AlbumsUsers key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;