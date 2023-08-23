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

let isOpen = false;

libraryBtn.addEventListener("click", open);
recyclingBtn.addEventListener("click", open);
craftsBtn.addEventListener("click", open);
historyBtn.addEventListener("click", open);

function createPostElement(data) {
  const post = document.createElement("div");
  post.className = "post";

  const username = document.createElement("h3");
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

function open() {
  // Create the outer div box
  const divBox = document.createElement("div");
  divBox.style.width = "90%";
  divBox.style.height = "700px";
  divBox.style.backgroundColor = "lightgray";
  divBox.style.position = "fixed"; // Makes it overlay above other content
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)"; // Center the div box
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)"; // Optional shadow for aesthetics

  // Add the "Hello" text to divBox
  const helloText = document.createTextNode("Hello");
  divBox.appendChild(helloText);

  // Create the exit button
  const exitButton = document.createElement("button");
  exitButton.innerHTML = "Exit";
  exitButton.style.marginTop = "20px";

  // Add an event listener to the exit button to remove divBox from the DOM
  exitButton.addEventListener("click", function () {
    document.body.removeChild(divBox);
  });

  // Append the exit button to divBox
  divBox.appendChild(exitButton);

  // Append divBox to the body of the document
  document.body.appendChild(divBox);
}

// function togglePopUp(event) {
//   if (event.target.closest("#post-form")) {
//     return;
//   }
//   if (isOpen) {
//     const fullScreen = gridContainer.querySelector(".fullScreen");
//     // const formClone = document.getElementById("post-form").cloneNode(true);
//     // fullScreen.appendChild(formClone);
//     if (fullScreen) {
//       gridContainer.removeChild(fullScreen);
//       gridItems.forEach((item) => {
//         item.style.display = "block";
//       });
//     }
//     isOpen = false;
//   } else {
//     const fullScreen = document.createElement("div");
//     fullScreen.classList.add("fullScreen");

//     // const sourceElement = event.target;
//     // const clonedContent = sourceElement.cloneNode(true);
//     // fullScreen.appendChild(clonedContent);

//     // if (event.target.id === "library") {
//     //   fullScreen.style.backgroundColor = "blue";

//     //   // const newBox = document.createElement("div");
//     //   // newBox.className = "newBox";

//     //   // const newText = document.createElement("h2");
//     //   // newText.textContent = "username";
//     //   // newBox.appendChild(newText);

//     //   return newBox;
//     // }

//     if (event.target.id === "recycling") {
//       fullScreen.style.backgroundColor = "orange";
//     }

//     if (event.target.id === "knowledge") {
//       fullScreen.style.backgroundColor = "yellow";
//     }

//     if (event.target.id === "history") {
//       fullScreen.style.backgroundColor = "green";
//     }

//     if (event.target.id === "ideas") {
//       fullScreen.style.backgroundColor = "red";
//       item.style.display = "none";
//     }

//     fullScreen.addEventListener("click", togglePopUp);

//     gridItems.forEach((item) => {
//       item.style.display = "none";
//     });
//     gridContainer.appendChild(fullScreen);
//     isOpen = true;
//   }
// }

// gridItems.forEach((item) => {
//   item.addEventListener("click", togglePopUp);
// });

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

  const result = await fetch("http://localhost:3000/community", options);
  const responseData = await result.json();
  console.log(responseData);

  if ((result.status = 201)) {
    let container;
    switch (topic) {
      case "library":
        container = document.querySelector(".library-posts");
        break;
      case "recycling":
        container = document.querySelector(".recycling-posts");
        break;
      case "knowledge":
        container = document.querySelector(".knowledge-posts");
        break;
      case "history":
        container = document.querySelector(".history-posts");
        break;
      default:
        container = document.getElementById("posts");
    }
    const newPostElem = createPostElement(responseData);
    container.appendChild(newPostElem);

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

  const response = await fetch("http://localhost:3000/community", options);

  if (response.status == 200) {
    const posts = await response.json();

    posts.forEach((p) => {
      let container;
      switch (p.topic) {
        case "library":
          container = document.querySelector(".library-posts");
          break;
        case "recycling":
          container = document.querySelector(".recycling-posts");
          break;
        case "knowledge":
          container = document.querySelector(".knowledge-posts");
        case "history":
          container = document.querySelector(".history-posts");

        default:
          container = document.getElementById("posts");
      }
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
