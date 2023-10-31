window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/products.json');
    xhr.onloadend = (event) => {
        var productInfos = JSON.parse(xhr.responseText);
        for(var i=0;i++;i<productInfos.list.length) {
            document.getElementsByClassName("product-image")[i].setAttribute("src", productInfos.list[i].image);
        }
    };
    xhr.send();
}