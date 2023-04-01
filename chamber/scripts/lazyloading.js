const ourImages = document.querySelectorAll("img[data-src]");

const loadImages = function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {img.removeAttribute("data-src")};
}

const options = {
    threshold: 1,
}


if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        else {
            return;
        }
    });
    }, 
        options
    );

    ourImages.forEach((img) => {
        observer.observe(img);
    });
} 
// if it's not supported, just load the image as normal
else {
    ourImages.forEach((img) => {
    loadImages(img);
});

}