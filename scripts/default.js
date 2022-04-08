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
}

window.onload = () => {
    // Default page to load
    loadPage('history');
}

let submit = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let country = document.getElementById("country").value;
    let say = document.getElementById("say").value;

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

    alert(`Hey ${fname} ${lname}, Thanks for filling the form. We will get back to you soon. Have a good day.`);
    return true;
}