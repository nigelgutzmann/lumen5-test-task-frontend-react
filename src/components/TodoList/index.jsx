import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import './todo-list.scss';
import {toggleTodo} from '../../actions';
import {filterTodos} from '../../helpers/filterTodos';

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div className="todo">
            <ul className="todo__list">
                {todos.map(item => (
                    <li key={item.id} className={classnames('todo__item', {'todo__item-complete': item.complete})}>
                        {item.id}
                        <input type="checkbox" checked={item.complete} onChange={() => toggleTodo(item.id)}/>
                        {item.text}
                        <div className="todo__item__category">{item.category}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default connect(
    ({todos, categoryFilter}) => ({todos: filterTodos(todos, categoryFilter)}),
    (dispatch) => ({
        toggleTodo: (id) => dispatch(toggleTodo(id))
    }),
)(TodoList);
