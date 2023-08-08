

import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext';

const Remaining = () => {
    const { budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: £{budget - totalExpenses}
            </span>
        </div>
    )
}

export default Remaining