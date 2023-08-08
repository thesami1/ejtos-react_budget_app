

import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button className='btn btn-success' onClick={event=> increaseAllocation(props.name)}>Increase</button></td>
            <td>
                <button className='btn btn-danger' onClick={handleDeleteExpense}>Delete</button>
            </td>
        </tr>
    )
}

export default ExpenseItem