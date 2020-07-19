import React from 'react';

function DeleteBookmarkData(e, id) {
    let items =JSON.parse(sessionStorage.getItem("myBookmarks"));
    items = items.filter((item) => item.id !== id);
    sessionStorage.setItem("myBookmarks", JSON.stringify(items));
    if (items.length === 0) {
        sessionStorage.removeItem("myBookmarks");
    }
    window.location.reload(false);
}

const BookmarkItem = ({ bookmark }) => (
    <div className="col-md-4" key={bookmark.id}>
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <img alt="avatar" style={{ width: "100%" }} src={bookmark.owner.avatar_url} />
                <h3 ><a href={bookmark.html_url} target="_blank">{bookmark.name}</a></h3>
                <p className="card-text" style={{ height:'50px', overflow: 'hidden' }}>
                    {bookmark.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => DeleteBookmarkData(bookmark.url, bookmark.id) }>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zM4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4z"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
)

const BookmarksList = (props) => {
    let bookmarkDataList = props.list
    if (bookmarkDataList.length > 0) {
        return(
            <div className='jumbotron text-center'>
            <div className="container">
                <div className="row">
                    { bookmarkDataList && bookmarkDataList.map(bookmark => (
                        <BookmarkItem bookmark={bookmark} key={bookmark.id} />
                    ))}
                </div>
            </div>
            </div>
        )
    }
    return ( <h3>No Bookmarks Here!</h3> )
}

export default BookmarksList;