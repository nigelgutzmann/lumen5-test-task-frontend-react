import React from 'react';
import {connect} from 'react-redux';

import './category-selector.scss';
import {setCategoryFilter} from '../../actions';

const uniqueValues = array =>
    array.reduce((p, c) => (p.includes(c) ? p : [...p, c]), []);

const CategorySelector = ({categories, categoryFilter, changeCategory}) => {
    return (
        <div className="category-selector">
            <select value={categoryFilter} onChange={e => changeCategory(e.target.value)}>
                <option value="">[all]</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default connect(
    ({todos, categoryFilter}) => ({
        categories: uniqueValues(todos.map(todo => todo.category)),
        categoryFilter
    }),
    (dispatch) => ({
        changeCategory: (category) => dispatch(setCategoryFilter(category))
    }),
)(CategorySelector);
