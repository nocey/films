/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getSearchFilms,genreFims} from "../../../Redux/Actions/Actions";
export default function Search() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch();
    const [visible, setvisible] = useState(false);
    const [search,setSearch] = useState();
    useEffect(() => {
        dispatch(getSearchFilms(search))
        dispatch(genreFims())
        return () => {
        }
    }, [dispatch,search])

    return (
        <div id="search">
            <input type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}} />
            {console.log(state.searchReducer.results)}
            <div id="search-div">
                <ul>
                {
                search&&state.searchReducer.results&&state.searchReducer.results.map((e=>{
                    return(
                        <li className="search-bar">
                            <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path} alt="" />
                            <h3>{e.title}</h3>
                            <h6>{e.genre_ids&&e.genre_ids.map((e)=>{return(state.genreFilms.genres&&state.genreFilms.genres.map((a)=>{
                                    console.log(a.id)
                                    if(a.id===e){
                                    return (<p className="genres">{a.name}</p>)
                                    }else{
                                        return null
                                    }
                                })
                            )})}</h6>
                        </li>
                    )
                }))
            }
            
                </ul>
            </div>
        </div>
    )
}
