import React from 'react';

import './app.scss';
import TodoList from '../TodoList';
import CategorySelector from '../CategorySelector';
import AddForm from '../AddForm';

export const Index = () => (
    <div className="app">
        <h1>TODO App</h1>
        <TodoList/>
        <CategorySelector/>
        <AddForm/>
    </div>
);
