import React, { Component } from 'react';
import { Consumer } from '../context';
import CountryNames from '../countries';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            country: '',
            nations: []
        }
    }


    onChange = e =>{
        const { value } = e.target;
        this.setState(()=>({ country: value }))

        let reg = new RegExp(`^${value.trim()}`, "i");
        
        let filteredlist = CountryNames.filter(nation => reg.test(nation));

        this.setState(()=>({ nations: [...filteredlist] }))

        if(value.trim().length < 1) this.setState(()=>({ nations: [] }));

    }

    render() {
        const { country, nations } = this.state;
        let i = 0;
        return (
            <Consumer>
                {value =>(
                    <div className="card p-5 m-3 border-0 shadow">
                        <form onSubmit={(e)=> value[1](country, e) }>
                            <div className="form-group suggestions-form-group">
                                <input type="text" className="form-control" onChange={this.onChange} value={country} placeholder="Search by country..." />
                                <div className="suggestions">
                                    {
                                        nations.map(nation =>(
                                            <li key={i++} onClick={(e)=>{

                                                this.setState(()=>({
                                                    country: nation,
                                                    nations: []
                                                }))
                                                value[1](nation, e)

                                            }}>{nation}</li>
                                        ))
                                    }
                                  
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-sm btn-dark">Search</button>
                            </div>
                        </form>
                        {value[0].heading[0] === 'S' ? <button className="btn btn-sm btn-info" onClick={value[2]} >Show all countries</button> : ''}
                    </div>
                )}
            </Consumer>
        )
    }
}

export default Search
