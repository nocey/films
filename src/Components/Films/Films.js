/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions/Actions";
import "./Films.css"

function Films() {
    const state = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getTrendFilms(state.pageChanger));
        dispatch(actions.aaaGet());
        return () => { };
    }, [dispatch,state.pageChanger]);

    return (
        <div id="films-js">
            <ul id="film-list">
                {state.trendFilms.results &&
                    state.trendFilms.results.map((e, i) => {
                        return (
                            <li className="film" key={e.id}>
                               <h1>{(i+1)*((state.pageChanger))}</h1>
                               <img
                                    src={"https://image.tmdb.org/t/p/w500" + e.backdrop_path}
                                    alt=""
                                />
                                <h3>
                                {e.title&& e.title +" = film"}
                                {e.name && e.name + " = dizi"}
                                </h3>
                                <p>
                                    {e.overview}
                                </p>
                               
                            </li>
                        );
                    })}
            </ul>
            <div id="pager">
                <h1 id="previous" onClick={()=>{dispatch(actions.downPage())}}>
                Önceki Sayfa
            </h1>
            <h1 id="add" onClick={()=>{dispatch(actions.addPage())}}>
                Sonraki Sayfa
            </h1>
            
            </div>
        </div>
    );
}
export default Films;
