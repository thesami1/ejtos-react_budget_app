

import React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../../ejtos-react_budget_app/src/context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitForm = () => {
        if (cost > remaining) {
            alert('The value cannot exceed the remaining funds £' + remaining);
            setCost('');
            return;
        }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            });
        }

    }
    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect01'>Department</label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect01' onChange={event => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value='IT'>IT</option>
                        <option value='HR'>HR</option>
                        <option value='Finance'>Finance</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Sales'>Sales</option>
                    </select>

                    <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>Action</label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect02' onChange={event => setAction(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value='Reduce'>Reduce</option>
                        <option value='Increase'>Increase</option>
                    </select>

                    <span style={{ marginLeft: '2rem' }}>{currency}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{marginLeft:'0.5rem' ,size:10}}
                        onChange={event => setCost(event.target.value)}
                    />
                    <button className='btn btn-primary' onClick={submitForm} style={{ marginLeft: '2rem' }}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AllocationForm