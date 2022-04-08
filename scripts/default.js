let activePage = (href) => {
    // reset previous selected
    for(let el of document.querySelector("nav").children) {
        el.classList = "";
    }

    // Update new selected
    if(document.getElementById(`a-${href}`)) {
        document.getElementById(`a-${href}`).classList.add("hoverItem");
    }
}

// Load page after click
let loadPage = (href) => {
    // Scroll to the top
    document.getElementById('content').scroll({top:0,behavior:'smooth'});

    // Make a request to get the data from the pages
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", `${href}.html`, false);
    xmlhttp.send();

    // Update the DOM
    document.getElementById('content').innerHTML = xmlhttp.responseText;

    // Highlight link
    activePage(href);
}

let submit = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let say = document.getElementById("say").value;

    // validate entry
    if(!fname) {
        document.getElementById("fname").focus();
        return false;
    } else if (!lname) {
        document.getElementById("lname").focus();
        return false;
    } else if(!say) {
        document.getElementById("say").focus();
        return false;
    }

    // alert the user
    alert(`Hey ${fname} ${lname}, Thanks for filling the form. We will get back to you soon. Have a good day.`);

    // Reset the values
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("say").value = '';

    // Return back to home page
    loadPage('history');
    return true;
}

window.onload = () => {
    // Default page to load
    loadPage('history');
}