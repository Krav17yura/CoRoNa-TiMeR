const reWorld = (state = {
    worldStatus: {
        load: true,
        error: true
    },
    worldInfo: {
        cases: null,
        newCases: null,
        activeCases: null,
        death: null,
        newDeath: null,
        totalRecovered: null,
        timeOfGettingData: null
    }
}, action) => {
    switch (action.type) {
        case "SET_LOAD_WORLD_INFO":
            return {
                ...state,
                worldStatus: {
                    ...state.worldStatus,
                    load: action.payload
                }

            }
        case "GET_WORLD_INFO":
            return {
                ...state,
                worldInfo: {
                    ...state.worldInfo,
                    cases: action.payload.total_cases,
                    newCases: action.payload.new_cases,
                    activeCases: action.payload.active_cases,
                    death: action.payload.total_deaths,
                    newDeath: action.payload.new_deaths,
                    totalRecovered: action.payload.total_recovered,
                    timeOfGettingData: action.payload.statistic_taken_at
                }

            }
        case 'SET_LOAD_WORLD_ERROR':
            return {
                ...state,
                worldStatus: {
                    ...state.worldStatus,
                    error: false
                }
            }
        default:
            return state;
    }
}
export default reWorld;