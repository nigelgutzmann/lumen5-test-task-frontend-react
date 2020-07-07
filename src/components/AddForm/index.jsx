import React, {useState} from 'react';
import {connect} from 'react-redux';

import './add-form.scss';
import {addTodo} from '../../actions';

const AddForm = ({addTodo}) => {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    if (task && category && error) {
        setError('');
    }

    const handleAdd = () => {
        if (!task || !category) {
            setError('please fill all fields');
            return;
        }

        addTodo(task, category);
        setTask('');
        setCategory('');
    };

    return (
        <div className="add-form">
            <div className="add-form__button" onClick={handleAdd}>+</div>
            <input onChange={e => setTask(e.target.value)} value={task} placeholder="todo"/>
            <input onChange={e => setCategory(e.target.value)} value={category} placeholder="category"/>
            {
                error
                    ? (
                        <div className="error">{error}</div>
                    )
                    : undefined
            }
        </div>
    );
};
export default connect(
    () => ({}),
    (dispatch) => ({
        addTodo: (todo, category) => dispatch(addTodo(todo, category))
    }),
)(AddForm);
