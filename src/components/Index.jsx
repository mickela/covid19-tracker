import React from 'react';
import { Consumer } from '../context';
import Navbar from './Navbar';
import Global from './Global';
import Search from './Search';
import Country from './Country';
import Spinner from './spinner';


export default function Index() {
    let i = 0;
    return(
        <div className="bg-light" style={{minHeight: '101vh'}}>
            <Navbar/>
            <div className="container">
                <Search/>
                <Global/>
                <Consumer>
                    {value =>(
                        <React.Fragment>
                            {console.log(value)}
                            <h3 className="text-center p-3">{value[0].heading}</h3>
                            {
                                value[0].loading === true ? 
                                    <Spinner />
                                :
                                    <div className="row">
                                        {value[0].countries.map(({ active, confirmed, countryRegion, deaths, lastUpdate, provinceState, recovered }) =>(
                                            <Country 
                                                key={i++}
                                                name={countryRegion} 
                                                provinceState={provinceState} 
                                                confirmed={confirmed} 
                                                deaths={deaths} 
                                                active={active}
                                                recovered={recovered} 
                                                updated={lastUpdate} 
                                            />
                                        ))}
                                    </div>
                            }
                        </React.Fragment>
                    )}
                </Consumer>

            </div>
            <div className="card p-3 m-auto text-center">
                <p>
                    Built with a heavy <span role="img" aria-label="heart">💖</span> by <span className="text-danger">Code<span className="text-primary">Maniac.net</span></span>
                </p>
            </div>
        </div>
    )
}