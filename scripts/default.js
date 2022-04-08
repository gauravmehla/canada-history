// Load page after click
function loadPage(href) {
    // Scroll to the top
    document.getElementById('content').scroll({top:0,behavior:'smooth'});

    // Make a request to get the data from the pages
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", `${href}.html`, false);
    xmlhttp.send();

    // Update the DOM
    document.getElementById('content').innerHTML = xmlhttp.responseText;
}

window.onload = () => {
    // Default page to load
    loadPage('history');
}