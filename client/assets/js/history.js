

let svg = document.querySelector(".svg-container");
let pathGroup = svg.querySelector(".path-group");
let paths = Array.from(pathGroup.querySelectorAll("path"));
let activeSVG = null;
let svg1 = document.querySelector("#svg1");
let svg2 = document.querySelector("#svg2");
let svg3 = document.querySelector("#svg3");
let drawer = document.querySelector(".drawer-right");
let drawerContent = document.querySelectorAll(".drawer-content");
let content_svg1 = document.querySelector("#content-svg1");
let content_svg2 = document.querySelector("#content-svg2");
let content_svg3 = document.querySelector("#content-svg3");




function bringToFront(path) {
    pathGroup.removeChild(path);
    pathGroup.appendChild(path);
}

function restoreOrder(path) {
    // Check if the path is still a child of pathGroup before reinserting
    if (!pathGroup.contains(path)) {
        pathGroup.appendChild(path);
    }
}


paths.forEach(function (item) {
    var pathLength = item.getTotalLength();
    // item.setAttribute("stroke-dasharray", pathLength);
    // item.setAttribute("stroke-dashoffset", pathLength);
    item.classList.toggle("new");

    item.addEventListener("mouseover", function () {
        bringToFront(item);
    });

    item.addEventListener("mouseout", function () {
        restoreOrder(item);
    });

    item.addEventListener("click", function() {
item.classList.add()
    })
});


svg1.addEventListener("click", function () {
    if (activeSVG !== svg1) {
        closeDrawer();
        setTimeout(() => { openDrawer(svg1); }, 200);
        activeSVG = svg1;
        svg.classList.add("left");
        svg1.style.cssText = "transform: scale(1.55);  transition: transform 0.7s ease; fill: red;";
        svg2.style.cssText = "transform: scale(0.5); transition: transform 0.7s;";
        svg3.style.cssText = "transform: scale(0.5); transition: transform 0.7s;";

       
    } else {
        if (drawer.classList.contains("open")) {
            closeDrawer();
            svg.classList.remove("left");
            activeSVG = null;
            svg1.style.cssText = "";
            svg2.style.cssText = "";
            svg3.style.transform = "";

        } else {
            
            openDrawer(svg1);
            svg.classList.add("left");
            activeSVG = svg1;
            svg1.style.cssText = "";
            svg2.style.cssText = "";
            svg3.style.cssText = "";


        }
    }
});

svg2.addEventListener("click", function () {
    if (activeSVG !== svg2) {
        closeDrawer();
        setTimeout(() => { openDrawer(svg2); }, 200);
        activeSVG = svg2;
        svg.classList.add("left");
        svg2.style.cssText = "transform: scale(1.55);  transition: transform 0.7s ease; fill: #ADD8E6;";
        svg1.style.cssText = "transform: scale(0.5); transition: transform 0.7s;";
        svg3.style.cssText = "transform: scale(0.5); transition: transform 0.7s;";
    } else {
        if (drawer.classList.contains("open")) {
            closeDrawer();
            svg.classList.remove("left");
            activeSVG = null;
            svg1.style.cssText = "";
            svg2.style.cssText = "";
            svg3.style.cssText = "";
        } else {
            openDrawer(svg2);
            svg.classList.add("left");
            activeSVG = svg2;
            svg1.style.cssText = "";
            svg2.style.cssText = "";
            svg3.style.cssText = "";
        }
    }
});

svg3.addEventListener("click", function () {
    if (activeSVG !== svg3) {
        closeDrawer();
        setTimeout(() => { openDrawer(svg3); }, 200);
        activeSVG = svg3;
        svg.classList.add("left");
        svg3.style.cssText = "transform: scale(1.75);  transition: transform 0.7s ease; fill: red;";
        svg2.style.cssText = "transform: scale(0.5); transition: transform 0.7s;";
        svg1.style.cssText = "transform: scale(0.5); transition: transform 0.7s;";
        
    } else {
        if (drawer.classList.contains("open")) {
            closeDrawer();
            svg.classList.remove("left");
            activeSVG = null;
            svg1.style.cssText = "";
            svg2.style.cssText = "";
            svg3.style.cssText = "";
        } else {
            openDrawer(svg3);
            svg.classList.add("left");
            activeSVG = svg3;
             svg1.style.cssText = "";
            svg2.style.cssText = "";
            svg3.style.cssText = "";
        }
    }
});


function openDrawer(svg) {
    // Hide all content first
    console.log(activeSVG);
    drawerContent.forEach(content => {
        content.classList.add("hidden");
    })

    if (svg === svg1) {
        console.log("Opening svg1 content");
        content_svg1.classList.remove("hidden");
    } else if (svg === svg2) {
        console.log("Opening svg2 content");
        content_svg2.classList.remove("hidden");
    } else if (svg === svg3) {
        console.log("Opening svg3 content");
        content_svg3.classList.remove("hidden");
    }
    drawer.classList.add("open");
}

function closeDrawer() {
    drawer.classList.remove("open");
}


document.addEventListener("click", function (event) {
    // Check if the click target is outside the drawer and svgs
    if (drawer && !drawer.contains(event.target) && event.target !== svg1 && event.target !== svg2 && event.target !== svg3) {
        closeDrawer();
        svg1.style.cssText = "";
        svg2.style.cssText = "";
        svg3.style.cssText = "";
        svg.classList.remove("left");
        activeSVG = null;
    } 
});

window.addEventListener("resize", function () {
    if (activeSVG) {
        closeDrawer();
        openDrawer(activeSVG);
    }
})


const description = document.getElementById("image-description")
const image = document.getElementById("image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const building = document.querySelector("#building");
const storySection = document.querySelector(".story-section");
const begin = document.querySelector(".begin");
const redania = document.querySelector("#redania");
const redWater = document.querySelector("#redWater");
const next = document.querySelector("#next");

begin.addEventListener("click", () => {
    svg1.style.animation = "flashAnimation 0.5s infinite";
    storySection.classList.add("redHidden");
    redania.classList.remove("redHidden");
})

next.addEventListener("click", () => {
    
    svg1.style.animation = "flushAnimation 2s infinite";
    redania.classList.add("redHidden");
    redWater.classList.remove("redHidden");
    

})
const images = ["./assets/download.jpeg", "image2.jpg", "image3.jpg"]; // Replace with your image URLs
const descriptions = [
    
        "This place is fukkkkin magical",
        "May the lord bless this place",
        "Damn ok bro we get it"
    
]
let currentIndex = 0;

function displayIcon() {
    building.style.display = "inline";
}
function updateDescription() {
    description.textContent = descriptions[currentIndex]
}
function updateImage() {
  image.src = images[currentIndex];
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
  updateDescription();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
  updateDescription();

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    updateDescription();
    
    // Apply the flash animation to svg1
    svg1.style.animation = "flashAnimation 0.5s ease-in-out";
    // Reset the animation after a short delay
    setTimeout(() => {
      svg1.style.animation = "";
    }, 500);
  });
});

updateImage(); // Initialize with the first image

