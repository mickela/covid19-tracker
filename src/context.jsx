import React, { Component } from 'react';

const Context = React.createContext();


export default class Provider extends Component {
    constructor(){
        super();
        this.state = {
            countries: [],
            initialList: [],
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
                    countries: data.Countries,
                    initialList: data.Countries,
                    loading: false,
                    heading: 'All Countries'
                }))
            }
        })
        .catch(err => {
            console.log(err)
            this.setState(()=>({ loading: false, heading: 'Failed to load resource' }))
            alert("Error: Something isn't right!\n\n*Check your spelling \n*Make sure you have access to the internet");
        })
    }

    reload = ()=>{
        this.setState({
            countries: [],
            loading: true,
            heading: ''
        })
        this.fetchData('https://api.covid19api.com/summary', 'LOAD_COUNTRIES');
    }

    componentDidMount(){
        this.reload();
    }

    handleSubmit = (country, e) =>{
        e.preventDefault();
        
        if(country.trim().length > 0){
            this.setState(()=>({
                countries: this.state.initialList.filter(x => x.Country === country),
                heading: `Search Result for ${country}`
            }))
        }

    }

    handleReset = () =>{
        this.setState(()=>({ heading: "All Countries", countries: this.state.initialList }));
    }

    render() {
        return (
            <Context.Provider value={[this.state, this.handleSubmit, this.reload, this.handleReset]}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;