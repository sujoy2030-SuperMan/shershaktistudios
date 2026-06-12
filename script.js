```javascript
// Smooth Fade Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

document.querySelectorAll(
".feature, .game-card, .stat, .gallery img"
).forEach((el) => {

observer.observe(el);

});

// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 50){

nav.style.boxShadow =
"0 5px 20px rgba(0,0,0,.4)";

}else{

nav.style.boxShadow = "none";

}

});

// Gallery Click Zoom

document.querySelectorAll(".gallery img")
.forEach((img) => {

img.addEventListener("click", () => {

const overlay =
document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,.9)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "9999";

const image =
document.createElement("img");

image.src = img.src;
image.style.maxWidth = "90%";
image.style.maxHeight = "90%";
image.style.borderRadius = "20px";

overlay.appendChild(image);

overlay.addEventListener("click", () => {
overlay.remove();
});

document.body.appendChild(overlay);

});

});

// Console Message

console.log(
"🚕 SherShakti Studios Website Loaded Successfully"
);
```

