export const addWorldInfo = (info) => {
    return {
        type: 'GET_WORLD_INFO',
        payload: info
    }
}
export const setLoadWorldInfo = (load) => {
    return {
        type: 'SET_LOAD_WORLD_INFO',
        payload: load
    }
}

export const setLoadError = () => {
    return {
        type: 'SET_LOAD_WORLD_ERROR'
    }
}
export const fetchWorldInfo = () => dispatch => {
    dispatch(setLoadWorldInfo(false))
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "6bd41128b1msh3e2e53bd9ca48bcp17fbe4jsncb302159d5cc"
        }
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            dispatch(addWorldInfo(data))
            dispatch(setLoadWorldInfo(true))
        })
        .catch(err => {
            console.log(err);
            dispatch(setLoadError())
        });
}