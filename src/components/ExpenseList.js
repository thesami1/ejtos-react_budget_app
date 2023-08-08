

import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <td>Name</td>
                    <td>Allocated Budget</td>
                    <td>Increase By 10</td>
                    <td>Decrease</td>
                </tr>
            </thead>

            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        key={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ExpenseList