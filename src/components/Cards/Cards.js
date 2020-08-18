import React, { Component } from 'react';
import Card from "./Card/Card"
import "./Cards.css";
import axios from "axios";

class Cards extends Component {
    state = {
        results: []
    }

    componentDidUpdate() {
        if(this.props.query) {
            axios.get(`/search/users?q=${this.props.query}`)
            .then(response => {
                this.setState({results: response.data.items})
            })  
            .catch(err => alert('Something went wrong'))
        }
    }

    render() {
        let results = this.state.results.map(data => {
            return <Card key={data.id} img={data.avatar_url} username={data.login}/>
        })
        return (
        <div className="Cards">
            {results}
        </div>   
        )
    }
};

export default Cards;