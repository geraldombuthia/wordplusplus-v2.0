const Bookmark = (word) => {
  //Stores bookmark in Localstorage
  //uses the actual word as a unique key
  localStorage.setItem(`${word}`, word);
  alert(localStorage.getItem(`${word}`));
}

export default Bookmark