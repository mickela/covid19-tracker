import React, { Component } from 'react';
import { numberWithCommas } from '../utils/format';

class Global extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
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
                <div className="card m-3 p-5">
                    <h3>Worldwide Stats</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Confirmed Cases: <small>{numberWithCommas(cases.confirmed)}</small></h6>
                        </div>
                        <div className="col-md-4">
                            <h6>Recovered Cases: <small>{numberWithCommas(cases.recovered)}</small></h6>
                        </div>
                        <div className="col-md-4">
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