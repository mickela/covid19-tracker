import React, { Component } from 'react';
import { numberWithCommas } from '../utils/format';
  

class Global extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false,
            cases: {}
        }
    }

    componentDidMount(){
        // fetch("https://api.covid19api.com/world?from=2020-04-01T00:00:00Z&to=2020-05-01T00:00:00Z");
        fetch('https://covid19.mathdro.id/api')
        .then(res => res.json())
        .then(data =>{
            const { confirmed, recovered, deaths } = data;
            let cases = {
                confirmed: confirmed.value,
                recovered: recovered.value,
                deaths: deaths.value
            }
            this.setState(()=>({ cases, loaded: true }))
        })
        .catch(err => console.log(err))
    }

    render() {
        const { cases, loaded } = this.state;
        if(loaded){
            return (
                <div className="card m-3 p-5 border-0 shadow-sm global-container">
                    <h3>Global Impact</h3>
                    <div className="row">
                        <div className="col-md-4 border-right text-center m-auto h-50">
                            <span className="d-block" style={{ fontSize: '2rem' }}>
                                <i className="fas fa-users" />
                            </span>
                            <h6>Confirmed: <small>{numberWithCommas(cases.confirmed)}</small></h6>
                        </div>
                        <div className="col-md-4 border-right h-50 text-center m-auto">
                            <span className="d-block" style={{ fontSize: '2rem' }}>
                                <i className="fas fa-clinic-medical" />
                            </span>
                            <h6>Recovered: <small>{numberWithCommas(cases.recovered)}</small></h6>
                        </div>
                        <div className="col-md-4 h-50 text-center m-auto">
                            <span className="d-block" style={{ fontSize: '2rem' }}>
                                <i className="fas fa-door-open" />
                            </span>
                            <h6>Deaths: <small>{numberWithCommas(cases.deaths)}</small></h6>
                        </div>
                    </div>

                </div>
            )
        }else{
            return (
                <React.Fragment>
                    
                </React.Fragment>
            )
        }
    }
}

export default Global;