import React from 'react'

const Share = () => {
    let shareTag = document.createElement("a")
    shareTag.setAttribute("href", "whatsapp://send?text=Testing Whatsapp Share!");
    shareTag.setAttribute("data-action", "share/whatsapp/share");
    shareTag.click();
    console.log("clicked");
}

export default Share