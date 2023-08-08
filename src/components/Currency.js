import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }


    return (
        <div className='alert alert-success'> Location {
            <select name="currency" id="currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="£">Uk(£)</option>
                <option value="₹">India(₹)</option>
                <option value="€">Europe(€)</option>
                <option value="$">US($)</option>
            </select>
        }
        </div>
    )
}

export default Currency