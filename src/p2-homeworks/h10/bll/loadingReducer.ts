const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): typeof initState => {
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type loadingActionType = {
    type: "CHANGE_LOADING",
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingActionType => ({type: "CHANGE_LOADING", isLoading})