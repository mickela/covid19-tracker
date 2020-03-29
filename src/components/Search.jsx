import React, { useState } from 'react';
import { Consumer } from '../context';

export default function Search() {
    const [country, setCountry] = useState('');
    const onChange = (e) => setCountry(e.target.value);
    const reset = () => setCountry('');

    return (
        <Consumer>
            {value =>(
                <div className="card p-5 m-3">
                    <form onSubmit={(e)=> {value[1](country, e); reset()}}>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={onChange} placeholder="Search by country..." />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-block btn-sm btn-dark">Search</button>
                        </div>
                    </form>
                    {value[0].heading[0] === 'S' ? <button className="btn btn-sm btn-info" onClick={value[2]} >All Countries</button> : ''}
                </div>
            )}
        </Consumer>
    )
}
