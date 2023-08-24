const gridItems = document.querySelectorAll(".grid-item");
const gridContainer = document.querySelector(".grid-container");
const library = document.querySelector("#library");
const ideas = document.querySelector("#ideas");
const recycling = document.querySelector("#recycling");
const knowledge = document.querySelector("#knowledge");
const history = document.querySelector("#history");
const libraryBtn = document.querySelector("#libraryBtn");
const recyclingBtn = document.querySelector("#recyclingBtn");
const craftsBtn = document.querySelector("#craftsBtn");
const historyBtn = document.querySelector("#historyBtn");

const allPosts = [];

let isOpen = false;

libraryBtn.addEventListener("click", openLibrary);
recyclingBtn.addEventListener("click", openRecycling);
craftsBtn.addEventListener("click", openCrafts);
historyBtn.addEventListener("click", openHistory);

function createPostElement(data) {
  const post = document.createElement("div");
  post.className = "post";

  post.setAttribute("data-topic", data["topic"]);

  const username = document.createElement("h2");
  username.textContent = data["username"];
  post.appendChild(username);

  const header = document.createElement("h2");
  header.textContent = data["topic"];
  post.appendChild(header);

  const content = document.createElement("p");
  content.textContent = data["post"];
  post.appendChild(content);

  return post;
}

function openHistory() {
  const divBox = document.createElement("div");
  divBox.style.width = "90%";
  divBox.style.height = "700px";
  divBox.style.backgroundColor = "lightgray";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEacdch((postElem) => {
    if (postElem.getAttribute("data-topic") === "history") {
      divBox.appendChild(postElem.cloneNode(true));
    }
  });

  const exitButton = document.createElement("button");
  exitButton.textContent = "Exit";
  exitButton.style.marginTop = "20px";
  exitButton.style.position = "absolute";
  exitButton.style.top = "8px";
  exitButton.style.right = "16px";

  exitButton.addEventListener("click", function () {
    document.body.removeChild(divBox);
  });

  divBox.appendChild(exitButton);

  document.body.appendChild(divBox);
}

function openRecycling() {
  const divBox = document.createElement("div");
  divBox.style.width = "90%";
  divBox.style.height = "700px";
  divBox.style.backgroundColor = "lightgray";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "recycling") {
      divBox.appendChild(postElem.cloneNode(true));
    }
  });

  const exitButton = document.createElement("button");
  exitButton.textContent = "Exit";
  exitButton.style.marginTop = "20px";
  exitButton.style.position = "absolute";
  exitButton.style.top = "8px";
  exitButton.style.right = "16px";

  exitButton.addEventListener("click", function () {
    document.body.removeChild(divBox);
  });

  divBox.appendChild(exitButton);

  document.body.appendChild(divBox);
}

function openCrafts() {
  const divBox = document.createElement("div");
  divBox.style.width = "90%";
  divBox.style.height = "700px";
  divBox.style.backgroundColor = "lightgray";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "crafts") {
      divBox.appendChild(postElem.cloneNode(true));
    }
  });

  const exitButton = document.createElement("button");
  exitButton.textContent = "Exit";
  exitButton.style.marginTop = "20px";
  exitButton.style.position = "absolute";
  exitButton.style.top = "8px";
  exitButton.style.right = "16px";

  exitButton.addEventListener("click", function () {
    document.body.removeChild(divBox);
  });

  divBox.appendChild(exitButton);

  document.body.appendChild(divBox);
}

function openLibrary() {
  const divBox = document.createElement("div");
  divBox.style.width = "90%";
  divBox.style.height = "700px";
  divBox.style.backgroundColor = "lightgray";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "library") {
      divBox.appendChild(postElem.cloneNode(true));
    }
  });

  const exitButton = document.createElement("button");
  exitButton.textContent = "Exit";
  exitButton.style.marginTop = "20px";
  exitButton.style.position = "absolute";
  exitButton.style.top = "8px";
  exitButton.style.right = "16px";

  exitButton.addEventListener("click", function () {
    document.body.removeChild(divBox);
  });

  divBox.appendChild(exitButton);

  document.body.appendChild(divBox);
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  //const username = form.get("username");
  const topic = form.get("topic");
  const postContent = form.get("post");

  const postData = {
    //username: username,
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

  const result = await fetch("/community", options);
  const responseData = await result.json();
  console.log(responseData);

  if ((result.status = 201)) {
    const newPostElem = createPostElement(responseData);
    allPosts.push(newPostElem);

    e.target.reset();
    window.location.reload();
  } else {
    console.error("Failed to post the data.");
  }
});

async function loadPosts() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const response = await fetch("/community", options);

  if (response.status == 200) {
    const posts = await response.json();
    const container = document.getElementById("posts");

    posts.forEach((p) => {
      const elem = createPostElement(p);

      allPosts.push(elem);
      container.appendChild(elem);
    });
  } else {
    window.location.assign("./discussion.html");
  }
}

loadPosts();

//let container;
// switch (p.topic) {
//   case "library":
//     container = document.querySelector(".library-posts");
//     break;
//   case "recycling":
//     container = document.querySelector(".recycling-posts");
//     break;
//   case "knowledge":
//     container = document.querySelector(".knowledge-posts");
//   case "history":
//     container = document.querySelector(".history-posts");

//   default:
//     container = document.
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
