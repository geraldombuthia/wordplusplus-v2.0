const BookmarkView = () => {
    let keys = Object.keys(localStorage);
    for (let key of keys)
    {
        alert(`${key}: ${localStorage.getItem(key)}`)
    }
    console.log("clicked");
}

export default BookmarkView