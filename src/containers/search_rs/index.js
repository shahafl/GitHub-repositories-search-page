import React, { Component } from 'react';
import SearchList from '../../components/SearchList'
import Loader from '../../components/Loader'

class Search_rs extends Component {
    state = { 
        search_rs: [],
        searchName: '',
        isLoading: false,
        isFatching: false
    }

    onSerachSubmit = (event) => {
        event.preventDefault()
        this.setState({ isLoading: true });
        fetch(`https://api.github.com/search/repositories?q=${event.target.searchInput.value}`)
        .then(response => response.json())
        .then(json => this.setState({ search_rs: json.items, isLoading: false, isFatching: false }))
    }
    
    onSerachInpoutChange = (event) => {
        this.setState({ searchName: event.target.value, isFatching: true });
    }

    render () {
        const {search_rs, searchName, isLoading, isFatching} = this.state;

        return (
            <div className='jumbotron text-center'>
                <form onSubmit={this.onSerachSubmit} className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={this.onSerachInpoutChange} name="searchInput" value={searchName} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </div>
                </form>
                { 
                    !isLoading && search_rs.length === 0 && searchName.trim() === '' 
                    &&
                    <p>Please Enter Repository to the input</p>
                }
                {
                    !isFatching && search_rs.length === 0 && searchName.trim() !== ''
                    &&
                    <p>No Repository Has been Found!</p>
                }
                {
                    isLoading && <Loader />
                }
                {
                    !isLoading && <SearchList list={this.state.search_rs} />
                }
            </div>
        )
    }
}

export default Search_rs;