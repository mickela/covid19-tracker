import React, { Component } from 'react';

const Context = React.createContext();


export default class Provider extends Component {
    constructor(){
        super();
        this.state = {
            countries: [],
            loading: true,
            heading: ''
        }
    }

    fetchData = (url, type, country) =>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            if(type === 'LOAD_COUNTRIES'){
                this.setState(()=>({
                    countries: data,
                    loading: false,
                    heading: 'All Countries'
                }))
            }else{
                const { confirmed, deaths, lastUpdate, recovered } = data;
                let response = {
                     confirmed: confirmed.value, provinceState: '', active: '', 
                     deaths: deaths.value, lastUpdate: lastUpdate.value, recovered: recovered.value, countryRegion: country 
                }
                this.setState(()=>({
                    countries: [response],
                    loading: false,
                    heading: `Search Result for ${country}`
                }))
            }

            // console.log('data', data);
        })
        .catch(err => {
            console.log(err)
            this.setState(()=>({ loading: false, heading: 'All Countries' }))
            alert("Error: Something isn't right!\n\n*Check your spelling \n*Make sure you have access to the internet");
        })
    }

    reload = ()=>{
        this.setState({
            countries: [],
            loading: true,
            heading: ''
        })
        this.fetchData('https://covid19.mathdro.id/api/confirmed', 'LOAD_COUNTRIES');
    }
    componentDidMount(){
        this.reload();
    }

    handleSubmit = (country, e) =>{
        e.preventDefault();
        this.setState(()=>({ loading: true, heading: 'Searching...' }))
        this.fetchData(`https://covid19.mathdro.id/api/countries/${country}`, 'SEARCH_COUNTRY', country)
    }

    render() {
        // console.log('state', this.state);
        
        return (
            <Context.Provider value={[this.state, this.handleSubmit, this.reload]}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;