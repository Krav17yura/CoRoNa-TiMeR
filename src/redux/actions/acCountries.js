export const setSortActiveBtn = (id) => {
    return {
        type: 'SET_ACTIVE_SORT_BTN',
        payload: id
    }
}


export const setVisiblePopup = (value) => {
    return {
        type: 'SET_VISIBLE_POPUP',
        payload: value
    }
}

const setPopupLoading = (value) => {
    return {
        type: 'SET_LOADING',
        payload: value
    }
}

export const addPopupItem = (item) => {
    return {
        type: 'ADD_POPUP_ITEM',
        payload: item
    }
}

export const getPopupItem = (country = 'USA') => dispatch => {
    dispatch(setPopupLoading(false))
    fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`, {
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
            let countryObj = data.latest_stat_by_country[0]
            for (let k in countryObj) {
                if (countryObj[k] === "") {
                    countryObj[k] = "0"
                } else if (countryObj[k] === "N/A") {
                    countryObj[k] = "Data is empty"
                }
            }
            dispatch(setPopupLoading(true))
            dispatch(addPopupItem(countryObj))
        })
        .catch(err => {
            console.log(err);
            dispatch(setCountryDetailsError())
        });
}


export const setCountriesLoading = (check) => {
    return {
        type: 'SET_COUNTRIES_LOADING',
        payload: check
    }
}

export const addCountriesInfo = (countries) => {
    return {
        type: 'ADD_COUNTRIES_WORLD_INFO',
        payload: countries
    }
}

export const fetchCountries = (id = 0) => dispatch => {
    dispatch(setCountriesLoading(false))
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
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
            let sortData
            let mass = data.countries_stat
            for (let key of mass) {
                for (let k in key) {
                    if (k === 'country_name') {
                        continue
                    }
                    key[k] = key[k].replace(/[^0-9]+/g, '')
                }
            }

            function sort(id) {
                switch (id) {
                    case 0:
                        return sortData = mass.sort((a, b) => b.cases - a.cases)
                    case 1:
                        return sortData = mass.sort((a, b) => b.new_cases - a.new_cases)
                    case 2:
                        return sortData = mass.sort((a, b) => b.active_cases - a.active_cases)
                    case 3:
                        return sortData = mass.sort((a, b) => b.deaths - a.deaths)
                    case 4:
                        return sortData = mass.sort((a, b) => b.new_deaths - a.new_deaths)
                    case 5:
                        return sortData = mass.sort((a, b) => b.total_recovered - a.total_recovered)
                    default:
                        return sortData
                }
            }

            const categoryFilter = sort(id)

            for (let key of categoryFilter) {
                for (let k in key) {
                    if (key[k] === '') {
                        key[k] = "Data is empty"
                    }
                    key[k] = key[k].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,')
                }
            }
            dispatch(addCountriesInfo(categoryFilter))
            dispatch(setCountriesLoading(true))
        })
        .catch(err => {
            console.log(err);
            dispatch(setCountriesError())
        });
}


export const setSearchCountryInputValue = (value) => {
    return {
        type: 'SET_SEARCH_COUNTRY_INPUT_VALUE',
        payload: value
    }
}

export const searchCountry = () => {
    return {
        type: 'SEARCH_COUNTRY'
    }
}

export const resetSearchValue = () => {
    return {
        type: 'RESET_SEARCH_VALUE'
    }
}


export const setCountriesError = () => {
    return {
        type: 'SET_COUNTRIES_ERROR'
    }
}

export const setCountryDetailsError = () => {
    return {
        type: 'SET_COUNTRIES_DETAILS_ERROR'
    }
}