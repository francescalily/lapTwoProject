// Back up code incase mess up whole flow of page -

// const gridItems = document.querySelectorAll(".grid-item");
// const gridContainer = document.querySelector(".grid-container");
// const library = document.querySelector("#library");
// const ideas = document.querySelector("#ideas");
// const recycling = document.querySelector("#recycling");
// const knowledge = document.querySelector("#knowledge");
// const history = document.querySelector("#history");

// let isOpen = false;

// function togglePopUp(event) {
//   if (isOpen) {
//     const fullScreen = gridContainer.querySelector(".fullScreen");
//     const formClone = document.getElementById("post-form").cloneNode(true); //take out when functionality to keep the data works - need to change display to show also
//     fullScreen.appendChild(formClone);
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

//     const sourceElement = event.target;
//     const clonedContent = sourceElement.cloneNode(true);
//     fullScreen.appendChild(clonedContent);

//     if (event.target.id === "library") {
//       fullScreen.style.backgroundColor = "blue";
//     }

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

// function createPostElement(data) {
//   const post = document.createElement("div");
//   post.className = "post";

//   const header = document.createElement("h2");
//   header.textContent = data["topic"];
//   post.appendChild(header);

//   const content = document.createElement("p");
//   content.textContent = data["post"];
//   post.appendChild(content);

//   return post;
// }

// document.getElementById("post-form").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const form = new FormData(e.target);

//   const options = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       topic: form.get("topic"),
//       post: form.get("post"),
//     }),
//   };

//   const result = await fetch("http://localhost:3000/community", options);

//   if ((result.status = 201)) {
//     window.location.reload();
//   }
// });

// //Code to get the username and check whether authorised - may not need this but for functionality and code flow keep for now
// async function loadPosts() {
//   const options = {
//     headers: {
//       Authorization: localStorage.getItem("token"),
//     },
//   };

//   const response = await fetch("http://localhost:3000/community", options);

//   if (response.status == 200) {
//     const posts = await response.json();

//     const container = document.getElementById("posts"); //CHANGE to new div created after checking the function works - if this appends the div container with the id=posts, change to the cloned node of the div container that pops up when clicking on section

//     posts.forEach((p) => {
//       const elem = createPostElement(p);
//       container.appendChild(elem);
//     });
//   } else {
//     window.location.assign("./discussion.html");
//   }
// }

// loadPosts();
