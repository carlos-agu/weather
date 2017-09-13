import React, { Component } from 'react';
export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form className="input-group">
                <input type="text" 
                    placeholder="Get yout five-day forecast in your favorites cities" 
                    className="form-control"
                    value={this.state.term}
                    onChange={}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}