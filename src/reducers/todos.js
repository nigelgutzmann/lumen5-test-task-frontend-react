const defaultState = [
    {id: 1, category: 'Home', text: 'Buy milk', complete: false},
    {id: 2, category: 'Home', text: 'Eat fruits', complete: false},
    {id: 3, category: 'Work', text: 'Prepare annual report', complete: false},
    {id: 4, category: 'Work', text: 'Conduct 1 to 1', complete: false},
];

export const todos = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const {category, text} = action.data;
            return [
                ...state,
                {
                    id: state.reduce((p, c) => Math.max(p, c.id), 0) + 1,
                    category,
                    text,
                    complete: false
                }
            ];
        }
        case 'TOGGLE_TODO_COMPLETE':
            return state
                .map(item => (
                    item.id === action.data
                        ? {
                            ...item,
                            complete: !item.complete
                        }
                        : item
                ));
        default:
            return state;
    }
};
