const BookMarkCount = () => {
    let keys = Object.keys(localStorage);
    console.log(keys.length);
    return keys.length;
}

export default BookMarkCount