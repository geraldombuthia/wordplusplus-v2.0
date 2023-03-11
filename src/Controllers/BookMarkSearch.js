const BookMarkSearch = (word) => {
    return JSON.parse(localStorage.getItem(`${word}`));
}

export default BookMarkSearch