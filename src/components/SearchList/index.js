import React from 'react';

function HandleBookmarkData(e, id) {
    var myBookmarks = JSON.parse(sessionStorage.getItem('myBookmarks')) || [];
    let obj = {id:id, url:e};
    var itemExist = false;
    myBookmarks.map(item => {
        if(item.id == id) {
            return (
                itemExist = true
                )
        }
    })
    
    // set data to sessionStorage
    if (!itemExist) {
        myBookmarks.push(obj);
        sessionStorage.setItem('myBookmarks', JSON.stringify(myBookmarks));
    } else {
        alert('Bookmark already Exists')
    }

}

const SearchListItem = ({ search_rs }) => (
    <div className="col-md-4" key={search_rs.id}>
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <img alt="avatar" style={{ width: "100%" }} src={search_rs.owner.avatar_url} />
                <h3 ><a href={search_rs.html_url} target="_blank">{search_rs.name}</a></h3>
                <p className="card-text" style={{ height:'50px', overflow: 'hidden' }}>
                    {search_rs.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => HandleBookmarkData(search_rs.url, search_rs.id) }>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4zm9-1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd" d="M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
)

const SearchList = (props) => {
    return(
        <div className="container">
            <div className="row">
                {props.list.map(search_rs => (
                    <SearchListItem search_rs={search_rs} key={search_rs.id} />
                ))}
            </div>
        </div>
    )
}

export default SearchList;