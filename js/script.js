window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/products.json');
    xhr.onload = (event) => {
        var productInfos = JSON.parse(xhr.responseText);
        console.log(productInfos)
        for(var i=0;i<productInfos.list.length;i++) {
            console.log(productInfos.list[i].image);
            var linkTo = productInfos.list[i].link;
            document.getElementsByClassName("product-image")[i].src = productInfos.list[i].image;
            document.getElementsByClassName("buy-btn")[i].addEventListener("click", function () {
                location = linkTo;
            });
        }
    };
    xhr.send();
}