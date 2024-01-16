window.onload = async () => {
    let url = new URL(document.URL);
    const params = new URLSearchParams(url.search);

    const id = params.get("id");

    if (id === null) {
        window.location.assign("./notfound.html")
        // not found id in query params
    }

    let data = await fetch("/products.json")
    .then((response) => response.json())

    let found = false;
    let drink;
    for (let item of data.list) {
        if (item.id === id) {
            found = true;
            drink = item;
        }
    }
    if (!found) {
        window.location.assign("./notfound.html")
        // undifined id
    }

    // update html element

    document.getElementById("bottle-img").src = "img/details/" + drink.image;

    document.querySelector(".prop-name div.text").textContent = `${drink.name}`;
    document.querySelector(".prop-price div.text").textContent = `価格　　　: ${drink.price} 円`;
    document.querySelector(".prop-volume div.text").textContent = `内容量　　: ${drink.volume}`;
    document.querySelector(".prop-energy div.text").textContent = `エネルギー: ${drink.energy} kcal`;
    document.querySelector(".prop-lipid div.text").textContent = `脂質　　　: ${drink.lipid} g`;
    document.querySelector(".prop-solt div.text").textContent = `塩分　　　: ${drink.solt} g`;
    document.querySelector(".prop-protein div.text").textContent = `タンパク質: ${drink.protein} g`;
    document.querySelector(".prop-carbohydrates div.text").textContent = `炭水化物　: ${drink.carbohydrates} g`;
    document.querySelector(".prop-sugars div.text").textContent = `糖質　　　: ${drink.sugar} g`;
    document.querySelector(".prop-vitamin div.text").textContent = `ビタミン　: ${drink.vitamin} g`;

    document.querySelector(".prop-energy div.bar div.content").style.width = `${100 * (drink.energy / 60)}%`;
    document.querySelector(".prop-lipid div.bar div.content").style.width = `${100 * (drink.lipid / 1.0)}%`;
    document.querySelector(".prop-solt div.bar div.content").style.width = `${100 * (drink.solt / 1.0)}%`;
    document.querySelector(".prop-protein div.bar div.content").style.width = `${100 * (drink.protein / 1.0)}%`;
    document.querySelector(".prop-carbohydrates div.bar div.content").style.width = `${100 * (drink.carbohydrates / 15.0)}%`;
    document.querySelector(".prop-sugars div.bar div.content").style.width = `${100 * (drink.sugar / 15.0)}%`;
    document.querySelector(".prop-vitamin div.bar div.content").style.width = `${100 * (drink.vitamin /  200)}%`;prop-sugars
};