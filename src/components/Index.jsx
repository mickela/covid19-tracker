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
                <Global/>
                <Search/>
                <Consumer>
                    {value =>(
                        <React.Fragment>
                            <h3 className="text-center pt-5">{value[0].heading}</h3> <hr/>
                            {
                                value[0].loading === true ? 
                                    <Spinner />
                                : 
                                
                                value[0].heading.includes('Failed')
                                
                                ? 
                                
                                <div className="text-center m-auto">
                                    <button className="btn btn-sm btn-warning" onClick={value[2]}>Try Again</button>
                                </div>
                                
                                :
                                    <div className="row">
                                        {value[0].countries.map(country =>(
                                            <Country 
                                                key={i++}
                                                name={country.Country} 
                                                confirmed={country.TotalConfirmed} 
                                                deaths={country.TotalDeaths} 
                                                recovered={country.TotalRecovered} 
                                                updated={country.Date} 
                                                slug={country.Slug}
                                            />
                                        ))}
                                    </div>
                            }
                        </React.Fragment>
                    )}
      
                </Consumer>

            </div>
            <div className="card p-3 m-auto text-center border-0 shadow-sm">
                <p>
                    Built with a heavy <span role="img" aria-label="heart">❤</span> by <a href="https://www.codemaniac.net" rel="noreferrer noopener" className="text-danger">Code<span className="text-primary">Maniac.net</span></a>
                </p>
            </div>
        </div>
    )
}