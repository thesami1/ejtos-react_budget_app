
import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext';


const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal