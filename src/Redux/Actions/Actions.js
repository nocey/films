export const GET_FILMS_TRENDS = "GET_FILMS_TRENDS"


export function getTrendFilms(page){
    return (dispatch) => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=1817e292f51d003a69f5fad178683650&page=${page}`).then(response => response.json()).then(data => dispatch(listTrendFilms(data)))}
export function listTrendFilms(data){
    return{
        type:GET_FILMS_TRENDS,
        payload:data
}
}
export function getSearchFilms(filmName){
    return (dispatch) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=1817e292f51d003a69f5fad178683650&language=en-US&query=${filmName}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => dispatch(searchFilms(data)))
        .catch(err => console.log(err))
}

export function genreFims(){
    return (dispatch) => fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1817e292f51d003a69f5fad178683650&language=tr-TRhttps://api.themoviedb.org/3/genre/movie/list?api_key=1817e292f51d003a69f5fad178683650&language=tr-TR`)
        .then(response => response.json())
        .then(data => dispatch(genreFilms(data)))
        .catch(err => console.log(err))
}

export function genreFilms(data){
    return{
        type:"GET_FILMS_GENRE",
        payload:data
}
}
export function searchFilms(data){
    return{
        type:"GET_FILMS_SEARCH",
        payload:data
}
}
export function aaaGet(data){
    return{ 
        type:"BYTE_ADD",
         payload:data
 }
}

export function addPage(page){
    return {
        type:"ADD_PAGE",
        payload:page
    }
}

export function downPage(page){
    return {
        type:"DOWN_PAGE",
        payload:page
    }
}