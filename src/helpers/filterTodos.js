export const filterTodos = (todos, categoryFilter) => {
    return categoryFilter
        ? todos.filter(item => item.category === categoryFilter)
        : todos;
};
