import React from 'react'

const Share = (word) => {
    let shareTag = document.createElement("a")
    shareTag.setAttribute("href", `whatsapp://send?text= *Word of the day!* &#13 ${word} &#13 View more on: https://wordplusplus.netlify.app`);
    shareTag.setAttribute("data-action", "share/whatsapp/share");
    shareTag.click();
    console.log("clicked");
}

export default Share