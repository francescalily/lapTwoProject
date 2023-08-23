// Back up code incase mess up whole flow of page -

const gridItems = document.querySelectorAll(".grid-item");
const gridContainer = document.querySelector(".grid-container");
const library = document.querySelector("#library");
const ideas = document.querySelector("#ideas");
const recycling = document.querySelector("#recycling");
const knowledge = document.querySelector("#knowledge");
const history = document.querySelector("#history");

let isOpen = false;

function createPostElement(data) {
  const post = document.createElement("div");
  post.className = "post";

  const header = document.createElement("h2");
  header.textContent = data["topic"];
  post.appendChild(header);

  const content = document.createElement("p");
  content.textContent = data["post"];
  post.appendChild(content);

  return post;
}

function togglePopUp(event) {
  if (event.target.closest("#post-form")) {
    return; // If so, exit the function early to allow the form to function normally.
  }
  if (isOpen) {
    const fullScreen = gridContainer.querySelector(".fullScreen");
    const formClone = document.getElementById("post-form").cloneNode(true); //take out when functionality to keep the data works - need to change display to show also
    fullScreen.appendChild(formClone);
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
      item.style.display = "none";
    }

    // if (
    //   event.target.id === "post-form" ||
    //   event.target.id === "post" ||
    //   event.target.id === "topic"
    // ) {
    //   fullScreen.style.backgroundColor = "red";
    //   item.style.display = "none";
    //   isOpen = false;
    // }

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

document.getElementById("post-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  const topic = form.get("topic");
  const postContent = form.get("post");

  const postData = {
    topic: topic,
    post: postContent,
  };

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  const result = await fetch("http://localhost:3000/community", options);
  const responseData = await result.json();

  if ((result.status = 201)) {
    const container = document.getElementById("posts");
    const newPostElem = createPostElement(responseData);
    container.appendChild(newPostElem);

    // Optional: Clear the form fields after successfully posting
    e.target.reset();
  } else {
    // Handle error case as necessary
    console.error("Failed to post the data.");
  }
});

//Code to get the username and check whether authorised - may not need this but for functionality and code flow keep for now
async function loadPosts() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const response = await fetch("http://localhost:3000/community", options);

  if (response.status == 200) {
    const posts = await response.json();

    const container = document.getElementById("posts"); //CHANGE to new div created after checking the function works - if this appends the div container with the id=posts, change to the cloned node of the div container that pops up when clicking on section

    posts.forEach((p) => {
      const elem = createPostElement(p);
      container.appendChild(elem);
    });
  } else {
    window.location.assign("./discussion.html");
  }
}

loadPosts();

//need to add username - join sql table with valentin user_account table so that username appears with post
//need to display posts (front-end)- right now can see the posts as soon as pressing post - need to make a toggle so is hidden until button is pressed
//(backend) need to make sure that data is stored correctly and is secure

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
