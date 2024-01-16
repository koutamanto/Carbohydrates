function changeImageOpacity() {
  let opacity = document.getElementById("anim-drink").style.opacity;
  if(opacity < 1){
    document.getElementById("anim-drink").style.opacity = 0.01 + Number(opacity);
    setTimeout(() => {
      changeImageOpacity();
    }, 10);
  } else {
    document.getElementById("anim-drink").style.opacity = 0;
  }
}

function buyAnimation(id, imageUrl, link) {
    // scroll
    window.scroll(0, 1100);

    document.getElementById("anim-drink").src = imageUrl;
    document.getElementById("anim-drink").style.opacity = 0;
    changeImageOpacity();

    setTimeout(() => {
      window.open(`./detail.html?id=${id}`, '_blank');
    }, 1000);
}

  //https://developer.mozilla.org/ja/docs/Web/API/Window/scroll