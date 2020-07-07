const defaultState = '';

export const categoryFilter = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_FILTER':
            return action.data || defaultState;
        default:
            return state;
    }
};
