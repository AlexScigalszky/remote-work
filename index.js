var imgs = document.getElementsByClassName("seleccionable")
function onClickImg(element) {
    element.classList.toggle('active');

    var footer = document.getElementsByTagName('footer')[0];
    if (footer) {
        footer.parentNode.removeChild(footer);
    }
    for (let i = 0; i < imgs.length; i++) {

        const imgFE = imgs[i];

        console.log(element.attributes['src']);

        if (imgFE.src !== element.src) {
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