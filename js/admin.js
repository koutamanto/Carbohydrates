function addProduct() {
    var product = {
        "id": document.getElementById("ID").value,
        "name": document.getElementById("name").value,
        "description": document.getElementById("description").value,
        "sparkling": document.getElementById("sparkling").checked,
        "cold": document.getElementById("cold").checked,
        "hot": document.getElementById("hot").checked,
        "volume": document.getElementById("volume").value,
        "price": document.getElementById("price").value,
        "link": document.getElementById("link").value,
    }
    // document.getElementById("resultJSON").innerText = JSON.stringify(product);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://192.168.0.228/addProduct");
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = (event) => {
        alert(event);
    }
    xhr.send(JSON.stringify(product));
}