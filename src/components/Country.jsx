import React from 'react';
import Moment from 'react-moment';

import { numberWithCommas } from '../utils/format';

function Country({ active, name, provinceState, confirmed, deaths, recovered, updated }) {
    return (
        <div className="col-md-6 ">
            <div className="card m-3 p-5">
                <p><b>Country:</b> {name} </p>
                
                {/* {provinceState.length > 0 ? <p><b>State:</b> {provinceState} </p> : ''} */}
                {/* {console.log(provinceState.length)} */}
                <p><b>State:</b> {provinceState}</p>

                <p><b>Confirmed: </b> {numberWithCommas(confirmed)} </p>
                <p><b>Deaths: </b> {numberWithCommas(deaths)} </p>

                {active > 0 ? <p><b>Active Cases: </b> {numberWithCommas(active)} </p> : '' }
                
                <p><b>Recovered: </b> {numberWithCommas(recovered)} </p>
                <p><b>Last Updated: </b> <Moment>{updated}</Moment> </p>
            </div>
        </div>
    )
}

export default Country;
