export const addTodo = (text, category) => ({
    type: 'ADD_TODO',
    data: {text, category}
});
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO_COMPLETE',
    data: id
});
