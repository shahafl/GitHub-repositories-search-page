import React, { Component } from 'react';
import BookmarksList from '../../components/BookmarksList';

class Bookmarks extends Component {
    state = {
        bookmarks: [],
        bookmark_rs: []
    }
    componentDidMount() {

        let bookmarksData = sessionStorage.getItem('myBookmarks');
        bookmarksData = JSON.parse(bookmarksData);
        if(bookmarksData) {
            bookmarksData.map(bookmarkData => { 
                this.getBookMartData(bookmarkData.url)
            })
        }
    }

    getBookMartData = (url) => {
        fetch(`${url}`)
        .then(response => response.json())
        .then(json => this.setState(pstate => ({ bookmarks: [...pstate.bookmarks, json] })))
    }

    render() {
        const {bookmarks} = this.state;
        
        return (
            <div className="container">
                <div className="row">
                    <BookmarksList list={bookmarks} />
                </div>
            </div>
        )
    }
}

export default Bookmarks;