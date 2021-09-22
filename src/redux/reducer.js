import * as ActionTypes from './actions'
const initialState = {
    movies: [],
    details: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_MOVIES:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.GET_MOVIES_COMPLETED:
            return {
                ...state,
                movies: action.payload,
                error: false,
                isLoading: false
            }
        case ActionTypes.GET_MOVIES_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false
            }
        case ActionTypes.GET_MOVIE_DETAIL:
            return {
                ...state,
                error: false,
                isLoading: true
            }
        case ActionTypes.GET_MOVIE_DETAIL_COMPLETED:
            return {
                ...state,
                error: false,
                isLoading: false,
                details: { ...state.details, [action.meta._id]: action.payload }
            }
        case ActionTypes.GET_HERO:
            return {
                ...state,
                error: false,
                isLoading: true,
            }
        case ActionTypes.GET_HERO_COMPLETED:
            return {
                ...state,
                error: false,
                isLoading: false,
                hero: action.payload
            }
        case ActionTypes.GET_HERO_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            }
        case ActionTypes.GET_TRAILERS:
            return {
                ...state,
                error: false,
                isLoading: true,
            }
        case ActionTypes.GET_TRAILERS_COMPLETED:
            return {
                ...state,
                error: false,
                isLoading: false,
                trailers: action.payload
            }
        case ActionTypes.GET_TRAILERS_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            }

        default:
            return state
    }
}

export default rootReducer