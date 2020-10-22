const reCountries = (state = {
    countriesStatus: {
        load: true,
        error: true
    },
    searchCountry: {
        loading: false,
        searchInputValue: '',
        searchInputValueError: false,
        searchCountry: [],
    },
    popupCountry: {
        isVisible: true,
        popupError: true,
        popupItemInfo: {
            country_name: null,
            cases: null,
            newCases: null,
            activeCases: null,
            deaths: null,
            newDeath: null,
            totalRecovered: null,
            timeOfGettingData: null,
            deaths_per1m: null,
            total_cases_per1m: null,
            total_tests: null,
            total_tests_per1m: null
        }
    },
    countries: [],
    sortBtn: ["Cases", "New Cases", "Active Cases", "Death", "New Deaths", "Recovered"],
    setActiveSortBtn: 0
}, action) => {
    switch (action.type) {
        case 'SET_COUNTRIES_LOADING':
            return {
                ...state,
                countriesStatus: {
                    ...state.countriesStatus,
                    load: action.payload
                }
            }
        case 'ADD_COUNTRIES_WORLD_INFO':
            return {
                ...state,
                countries: action.payload
            }
        case 'SET_ACTIVE_SORT_BTN': {
            return {
                ...state,
                setActiveSortBtn: action.payload
            }
        }
        case 'SET_SEARCH_COUNTRY_INPUT_VALUE': {
            return {
                ...state,
                searchCountry: {
                    ...state.searchCountry,
                    searchInputValue: action.payload
                }
            }
        }
        case 'SEARCH_COUNTRY': {
            let country = state.countries;
            let input = state.searchCountry.searchInputValue

            function filterByTagName(item) {
                if (input.trim().length === 0) {
                    return false;
                }
                return item.country_name.toLowerCase().indexOf(input.toLowerCase().trim()) > -1
            }

            let arr = country.filter(filterByTagName);
            if (input.trim().length !== 0 && arr.length === 0) {
                return {
                    ...state,
                    searchCountry: {
                        ...state.searchCountry,
                        searchInputValueError: true,
                        searchCountry: arr
                    }
                }
            } else {
                return {
                    ...state,
                    searchCountry: {
                        ...state.searchCountry,
                        searchInputValueError: false,
                        searchCountry: arr
                    }
                }
            }
        }
        case 'SET_VISIBLE_POPUP':
            return {
                ...state,
                popupCountry: {
                    ...state.popupCountry,
                    isVisible: action.payload
                }
            }
        case 'ADD_POPUP_ITEM':
            const data = action.payload
            return {
                ...state,
                popupCountry: {
                    ...state.popupCountry,
                    popupItemInfo: {
                        ...state.popupItemInfo,
                        country_name: data.country_name,
                        cases: data.total_cases,
                        newCases: data.new_cases,
                        activeCases: data.active_cases,
                        deaths: data.total_deaths,
                        newDeath: data.new_deaths,
                        totalRecovered: data.total_recovered,
                        timeOfGettingData: data.record_date,
                        deaths_per1m: data.deaths_per1m,
                        total_cases_per1m: data.total_cases_per1m,
                        total_tests: data.total_tests,
                        total_tests_per1m: data.total_tests_per1m
                    }
                }
            }
        case 'SET_LOADING':
            return {
                ...state,
                popupCountry: {
                    ...state.popupCountry,
                    loading: action.payload
                }
            }
        case 'RESET_SEARCH_VALUE':
            return {
                ...state,
                searchCountry: {
                    ...state.searchCountry,
                    searchInputValue: "",
                    searchCountry: [],
                    searchInputValueError: false
                }
            }
        case 'SET_COUNTRIES_ERROR':
            return {
                ...state,
                countriesStatus: {
                    ...state.countriesStatus,
                    error: false
                }

            }
        case 'SET_COUNTRIES_DETAILS_ERROR':
            return {
                ...state,
                popupCountry: {
                    ...state.popupCountry,
                    popupError: false
                }
            }

        default:
            return state
    }
}

export default reCountries;