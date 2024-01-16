// do not edit

window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/products.json');
    xhr.onload = (event) => {
        var productInfos = JSON.parse(xhr.responseText);
        console.log(productInfos)
        for(var i=0;i<productInfos.list.length;i++) {
            let id = productInfos.list[i].id;
            let displayImage = "img/displayed/" + productInfos.list[i].image;
            let detailsImage = "img/details/" + productInfos.list[i].image;
            let link = productInfos.list[i].link;
            document.getElementsByClassName("product-image")[i].src = displayImage;
            document.getElementsByClassName("buy-btn")[i].addEventListener("click", function () {
                buyAnimation(id, detailsImage, link);
            });
        }
    };
    xhr.send();
}