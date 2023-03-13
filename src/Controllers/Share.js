const Share = (word, e) => {
    let shareTag = document.createElement("a")
    let text = `*Word of the day!*%0A%0A${word.charAt(0).toUpperCase() + word.slice(1)}%0A%0D\nView more on: https://wordplusplus.netlify.app`
    shareTag.setAttribute("href", `whatsapp://send?text=${text}`);
    shareTag.setAttribute("data-action", "share/whatsapp/share");
    shareTag.click(); 
}
// There is a Web Share API available to allow for native access
// to share to various different Apps available on mobile or desktop
// has a 90% reach.
export default Share