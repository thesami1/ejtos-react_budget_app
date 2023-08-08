

import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext'


const Budget = () => {
    const { dispatch, currency } = useContext(AppContext);
    const changeBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }



    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                style={{ marginLeft: '0.5rem', size: 10 }}
                name="budget"
                onChange={event => changeBudget(event.target.value)}
            />
        </div>
    )
}

export default Budget