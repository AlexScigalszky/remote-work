var imgs = document.getElementsByTagName("img")
function onClickImg(img) {
    img.classList.toggle('active');
    var footer = document.getElementsByTagName('footer')[0];
    if (footer) {
        footer.parentNode.removeChild(footer);
    }
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
        img.addEventListener("click",
            (event) => onClickImg(event.target)
        );
    }
})()