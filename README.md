UI-Kit Gridly
=============

> A GOV.AU UI-Kit gridly bookmarklet

To install the bookmarklet by draging
[this link](javascript:(function(){;var%20existing=document.querySelectorAll(%22.js-uikit-gridly%22);if(existing.length%3E0)%7Bexisting%5B0%5D.parentNode.removeChild(existing%5B0%5D)%7Delse%7Bvar%20overlay=document.createElement(%22div%22);if(overlay.classList)%7Boverlay.classList.add(%22js-uikit-gridly%22)%7Delse%7Boverlay.className+=%22%20js-uikit-gridly%22%7Doverlay.style.backgroundImage=%22linear-gradient(%20#000%202px,%20transparent%202px%20),%22+%22linear-gradient(90deg,%20#000%202px,%20transparent%202px),%22+%22linear-gradient(%20rgba(0,%200,%200,%200.3)%201px,%20transparent%201px%20),%22+%22linear-gradient(%2090deg,%20rgba(0,%200,%200,%200.3)%201px,%20transparent%201px%20)%22;overlay.style.backgroundSize=%2264px%2064px,%2064px%2064px,%208px%208px,%208px%208px%22;overlay.style.backgroundPosition=%22-2px%20-2px,%20-2px%20-2px,%20-1px%20-1px,%20-1px%20-1px%22;overlay.style.position=%22fixed%22;overlay.style.top=%220%22;overlay.style.right=%220%22;overlay.style.bottom=%220%22;overlay.style.left=%220%22;document.body.appendChild(overlay)%7D;})())
to you bookmark bar.

You can also use this file:
https://raw.githubusercontent.com/govau/gridly/master/dist/index.js
