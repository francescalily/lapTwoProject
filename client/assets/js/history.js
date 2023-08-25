

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
let arrow = document.querySelector(".layer")
let clickMe = document.querySelector("#clickMe")


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
        arrow.style.display = "none";
        clickMe.style.display = "none";
       
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
        arrow.style.display = "none";
        clickMe.style.display = "none";
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
        arrow.style.display = "none";
        clickMe.style.display = "none";
        
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
        displayIcon();
    } else if (svg === svg3) {
        console.log("Opening svg3 content");
        content_svg3.classList.remove("hidden");
    }
    drawer.classList.add("open");
}

function closeDrawer() {
    drawer.classList.remove("open");
    removeIcon();
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
const storySection = document.querySelector(".story-section");
const begin = document.querySelector(".begin");
const redania = document.querySelector("#redania");
const redWater = document.querySelector("#redWater");
const next = document.querySelector("#next");
const red2 = document.querySelector("#red2");
const redSprings = document.querySelector("#redSprings");
const redFinish = document.querySelector("#redFinish")


begin.addEventListener("click", () => {
    svg1.style.animation = "flashAnimation 0.5s infinite";
    
    redania.classList.remove("redHidden");
    storySection.style.cssText = "opacity: 0";
   
})

next.addEventListener("click", () => {
    console.log("next button clicked")
    svg1.style.animation = "flushAnimation 2s infinite";
    redWater.classList.remove("redHidden");
    next.style.cssText = "opacity: 0;"

    
})

red2.addEventListener("click",() => {
    svg1.style.cssText = "animation: gradient-fill-animation; transition: transform 2s ease";
    svg2.style.cssText = "transition: transform 2s ease";
    svg3.style.cssText = "transition: transform 3s ease";


    // svg1.style.fill = document.querySelector("#gradient1")
    redFinish.style.cssText = "opacity: 1";
    redSprings.classList.remove("redHidden");
})

redFinish.addEventListener("click", () => {

    closeDrawer();
    redSprings.classList.add("redHidden");
    storySection.classList.remove("redHidden");
    svg1.style.cssText = "";
    svg2.style.cssText = "";
    svg3.style.cssText = "";
    svg.classList.remove("left");
})

const building = document.querySelector("#building");
const war = document.querySelector("#war");
const woods = document.querySelector("#woods");

const images = ["./assets/building.jpeg", "./assets/tank.jpeg", "./assets/woodies.jpeg"]; // Replace with your image URLs
const descriptions = [
    
        "A booming economic city in the heart of Cintra. This region is famous for bringing the conceptual design of Florin to life.",
        "The remains of an Alaskan tank that echoes the failed attempt to invade our country. Held on display in the Frontal Square to remind Florinians of the spirit they endured against the unwarranted attack. ",
        "The Wizards Woods: A place of philosophical density where a large portion of Cintrans would come and discuss the county's Civil and Political movements."
    
]
let currentIndex = 0;

function displayIcon() {
    if(currentIndex === 0) {
    building.style.display = "inline";
    woods.style.display = "";
    war.style.display = "";

}
else if(currentIndex === 1) {
    building.style.display = "";
    war.style.display = "inline"
    woods.style.display = "";
}
else if (currentIndex === 2) {
    war.style.display = "";
    woods.style.display = "inline"
    building.style.display = "";
}
else {
    woods.style.display = "";
    war.style.display = "";
    building.style.display = "";
}
}
function updateDescription() {
    description.textContent = descriptions[currentIndex]
}
function updateImage() {
  image.src = images[currentIndex];
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  console.log("current index:" + currentIndex)
  updateImage();
  updateDescription();
  displayIcon();
});



  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    console.log("current index:" + currentIndex)

    updateDescription();
    displayIcon()
  });

function removeIcon() {
woods.style.display = "";
war.style.display = "";
building.style.display = "";
}
updateImage(); // Initialize with the first image

