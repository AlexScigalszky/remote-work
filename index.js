var imgs = document.getElementsByTagName("img")
function onClickImg(img) {
    img.classList.toggle('active');
    console.log('img.src', img.src)
    for (let i = 0; i < imgs.length; i++) {

        const imgFE = imgs[i];
        if (imgFE.src !== img.src) {
            imgFE.classList.toggle('inactive');
        }
    }
}

(() => {
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        img.addEventListener("click", (event) =>
            onClickImg(event.target)
        );
    }
    console.log(imgs);

})()