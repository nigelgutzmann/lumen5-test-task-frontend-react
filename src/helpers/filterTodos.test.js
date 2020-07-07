import {filterTodos} from './filterTodos';

describe('filterTodos', () => {
    test('should return the same empty array 1', () => {
        const rawTodos = [];
        const categoryFilter = '';
        const filtered = filterTodos(rawTodos, categoryFilter);

        expect(filtered).toEqual(rawTodos);
    });
    test('should return the same empty array 2', () => {
        const rawTodos = [];
        const categoryFilter = 'Work';
        const filtered = filterTodos(rawTodos, categoryFilter);

        expect(filtered).toEqual(rawTodos);
    });
    test('should return the same array when filter is empty', () => {
        const rawTodos = [
            {id: 1, category: 'Home', text: 'Buy milk', complete: false},
            {id: 2, category: 'Home', text: 'Eat fruits', complete: false},
            {id: 3, category: 'Work', text: 'Prepare annual report', complete: false},
            {id: 4, category: 'Work', text: 'Conduct 1 to 1', complete: false},
        ];
        const categoryFilter = '';
        const filtered = filterTodos(rawTodos, categoryFilter);

        expect(filtered).toEqual(rawTodos);
    });
    test('should return the same array when filter presents among dataset', () => {
        const rawTodos = [
            {id: 1, category: 'Home', text: 'Buy milk', complete: false},
            {id: 2, category: 'Home', text: 'Eat fruits', complete: false},
            {id: 3, category: 'Work', text: 'Prepare annual report', complete: false},
            {id: 4, category: 'Work', text: 'Conduct 1 to 1', complete: false},
        ];
        const categoryFilter = 'Work';
        const expected = [
            {id: 3, category: 'Work', text: 'Prepare annual report', complete: false},
            {id: 4, category: 'Work', text: 'Conduct 1 to 1', complete: false},
        ];
        const filtered = filterTodos(rawTodos, categoryFilter);

        expect(filtered).toEqual(expected);
    });
    test('should return an empty array when filter doesnt present among dataset', () => {
        const rawTodos = [
            {id: 1, category: 'Home', text: 'Buy milk', complete: false},
            {id: 2, category: 'Home', text: 'Eat fruits', complete: false},
            {id: 3, category: 'Work', text: 'Prepare annual report', complete: false},
            {id: 4, category: 'Work', text: 'Conduct 1 to 1', complete: false},
        ];
        const categoryFilter = 'Clouds';
        const expected = [];
        const filtered = filterTodos(rawTodos, categoryFilter);

        expect(filtered).toEqual(expected);
    });
});
