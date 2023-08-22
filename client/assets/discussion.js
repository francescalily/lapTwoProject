const gridItems = document.querySelectorAll(".grid-item");
const gridContainer = document.querySelector(".grid-container");
const library = document.querySelector("#library");
const ideas = document.querySelector("#ideas");
const recycling = document.querySelector("#recycling");
const knowledge = document.querySelector("#knowledge");
const history = document.querySelector("#history");

let isOpen = false;

function togglePopUp(event) {
  if (isOpen) {
    const fullScreen = gridContainer.querySelector(".fullScreen");
    if (fullScreen) {
      gridContainer.removeChild(fullScreen);
      gridItems.forEach((item) => {
        item.style.display = "block";
      });
    }
    isOpen = false;
  } else {
    const fullScreen = document.createElement("div");
    fullScreen.classList.add("fullScreen");

    const sourceElement = event.target;
    const clonedContent = sourceElement.cloneNode(true);
    fullScreen.appendChild(clonedContent);

    if (event.target.id === "library") {
      fullScreen.style.backgroundColor = "blue";
    }

    if (event.target.id === "recycling") {
      fullScreen.style.backgroundColor = "orange";
    }

    if (event.target.id === "knowledge") {
      fullScreen.style.backgroundColor = "yellow";
    }

    if (event.target.id === "history") {
      fullScreen.style.backgroundColor = "green";
    }

    if (event.target.id === "ideas") {
      fullScreen.style.backgroundColor = "red";
    }

    fullScreen.addEventListener("click", togglePopUp);

    gridItems.forEach((item) => {
      item.style.display = "none";
    });
    gridContainer.appendChild(fullScreen);
    isOpen = true;
  }
}

gridItems.forEach((item) => {
  item.addEventListener("click", togglePopUp);
});

// function fullScreen() {
//   let fullScreenBox = document.createElement("div");
//   fullScreenBox.classList.add("fullScreenBox");
//   document.body.appendChild(fullScreenBox);

//   fullScreenBox.addEventListener("click", removeFullScreen);
//   gridContainer.appendChild(fullScreenBox);
// }

// gridItems.forEach((item) => {
//   item.addEventListener("click", fullScreen);
// });

// let overlay = document.createElement("div");
// overlay.className = "overlay";
// document.body.appendChild(overlay);

// gridItems.forEach((item) => {
//   item.addEventListener("click", openSection);
// });

// overlay.addEventListener("click", closeAllSections);

// function openSection(event) {
//   const clickedItem = event.currentTarget;

//   if (!clickedItem.classList.contains("active")) {
//     // Reset other items
//     gridItems.forEach((item) => {
//       item.style.transform = "";
//       item.style.zIndex = "";
//       item.style.transition = "";
//       item.classList.remove("active");
//     });

//     // Calculate the scale factor based on the ratio of gridContainer width to clickedItem width
//     const scaleFactor = gridContainer.offsetWidth / clickedItem.offsetWidth;

//     clickedItem.style.transform = `scale(${scaleFactor}) translate(-50%, -50%)`;
//     clickedItem.style.position = "fixed";
//     clickedItem.style.top = "50%";
//     clickedItem.style.left = "50%";
//     clickedItem.style.zIndex = "10";
//     clickedItem.style.transition = "transform 0.5s";
//     clickedItem.classList.add("active");

//     overlay.style.display = "block";
//   } else {
//     closeAllSections();
//   }
// }

// function closeAllSections() {
//   gridItems.forEach((item) => {
//     item.style.transform = "";
//     item.style.position = "";
//     item.style.top = "";
//     item.style.left = "";
//     item.style.zIndex = "";
//     item.style.transition = "";
//     item.classList.remove("active");
//   });

//   overlay.style.display = "none";
// }

//p5 circles idea
// function setup() {
//   // Sets the screen to be 720 pixels wide and 400 pixels high
//   let canvas = createCanvas(600, 600);
//   canvas.parent("canvasForHTML");
//   background(0);
//   noStroke();
// }

// function draw() {
//   drawCircle(width / 2, 280, 6);
// }

// function drawCircle(x, radius, level) {
//   const tt = (150 * level) / 4.0;
//   fill(tt);
//   ellipse(x, height / 2, radius * 2, radius * 2);
//   if (level > 1) {
//     level = level - 2;
//     drawCircle(x - radius / 2, radius / 2, level);
//     drawCircle(x + radius / 2, radius / 2, level);
//   }
// }
