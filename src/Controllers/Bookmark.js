const Bookmark = (word) => {
  //Stores bookmark in Localstorage
  //uses the actual word as a unique key
  localStorage.setItem(`${word[0].word}`, JSON.stringify(word));
  console.log(JSON.parse(localStorage.getItem(`${word[0].word}`)));
  alert(`Added ${word[0].word} to Bookmarks`)
}

export default Bookmark
// Must add a custom prompt to indicate word added to bookmark