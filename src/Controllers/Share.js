import React from 'react'

const Share = (word) => {
    let shareTag = document.createElement("a")
    shareTag.setAttribute("href", `whatsapp://send?text= *Word of the day!* &#13 ${word} &#13 View more on: https://wordplusplus.netlify.app`);
    shareTag.setAttribute("data-action", "share/whatsapp/share");
    shareTag.click();
    console.log(shareTag);
}
// There is a Web Share API available to allow for native access
// to share to various different Apps available on mobile or desktop
// has a 90% reach.
export default Share