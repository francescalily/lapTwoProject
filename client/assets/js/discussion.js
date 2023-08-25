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

  const username = document.createElement("h3");
  username.textContent = data["username"] + ' :';
  username.style.textDecoration = "underline";
  post.appendChild(username);
username.style.color = "grey";
  

  const header = document.createElement("h3");
  header.textContent = data["topic"];
  header.style.display = "none";

  post.appendChild(header);

  const content = document.createElement("p");
  console.log(data)
  content.textContent = data["content"];
  post.appendChild(content);

  content.style.display = "block";
  content.style.color = "black";

  const voteCount = document.createElement("span");
  voteCount.className = "vote-count";
  voteCount.textContent = data["votes"] || 0;
 
  voteCount.style.fontSize = "15px"
  voteCount.style.position = "sticky";
  // voteCount.style.left = "87%";
  // voteCount.style.marginBottom = "60px";
  
 
  post.appendChild(voteCount);

  const voteButton = document.createElement("button");
  voteButton.textContent = "upvote";
  // voteButton.style.marginLeft = "50px"; 
  // voteButton.style.marginLeft = "50px"; 
  voteButton.style.position = "fixed";
  voteButton.style.backgroundColor = "#009579";
  voteButton.style.left = "90%";  
  voteButton.style.fontSize= "10px";  
  voteButton.setAttribute("value", data["id"]);
  voteButton.addEventListener("click", async (e) => {
    const newVoteCount = await handleVote(e.target.value);
    voteCount.textContent = newVoteCount;
  });
  post.appendChild(voteButton);

  return post;
}

function openHistory() {
  const divBox = document.createElement("div");
  divBox.style.width = "90%";
  divBox.style.height = "700px";
  divBox.style.backgroundColor = "#F2F8F9";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "history") {
      const postWrapper = document.createElement("div");
      postWrapper.style.borderBottom = "dotted";
      postWrapper.style.marginBottom = "10px";
      postWrapper.style.padding = "10px";

      const clonedPost = postElem.cloneNode(true);
      clonedPost.querySelectorAll('button')[0].addEventListener("click", async (e) => {
        const newVoteCount = await handleVote(e.target.value);
        e.target.previousSibling.textContent = newVoteCount;
      });
      postWrapper.appendChild(clonedPost);

      divBox.appendChild(postWrapper);
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
  divBox.style.backgroundColor = "#F2F8F9";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "recycling") {
      const postWrapper = document.createElement("div");
      postWrapper.style.borderBottom = "dotted";
      postWrapper.style.marginBottom = "10px";
      postWrapper.style.padding = "10px";

      const clonedPost = postElem.cloneNode(true);
      clonedPost.querySelectorAll('button')[0].addEventListener("click", async (e) => {
        const newVoteCount = await handleVote(e.target.value);
        e.target.previousSibling.textContent = newVoteCount;
      });
      postWrapper.appendChild(clonedPost);

      divBox.appendChild(postWrapper);
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
  divBox.style.backgroundColor = "#F2F8F9";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "crafts") {
      const postWrapper = document.createElement("div");
      postWrapper.style.borderBottom = "dotted";
      postWrapper.style.marginBottom = "10px";
      postWrapper.style.padding = "10px";

      const clonedPost = postElem.cloneNode(true);
      clonedPost.querySelectorAll('button')[0].addEventListener("click", async (e) => {
        const newVoteCount = await handleVote(e.target.value);
        e.target.previousSibling.textContent = newVoteCount;
      });
      postWrapper.appendChild(clonedPost);

      divBox.appendChild(postWrapper);
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
  divBox.style.backgroundColor = "#F2F8F9";
  divBox.style.position = "fixed";
  divBox.style.top = "50%";
  divBox.style.left = "50%";
  divBox.style.transform = "translate(-50%, -50%)";
  divBox.style.padding = "20px";
  divBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  divBox.style.overflow = "scroll";
  divBox.style.border = "solid 2px black";

  allPosts.forEach((postElem) => {
    if (postElem.getAttribute("data-topic") === "library") {
      const postWrapper = document.createElement("div");
      postWrapper.style.borderBottom = "dotted";
      postWrapper.style.marginBottom = "10px";
      postWrapper.style.padding = "10px";

      const clonedPost = postElem.cloneNode(true);
      clonedPost.querySelectorAll('button')[0].addEventListener("click", async (e) => {
        const newVoteCount = await handleVote(e.target.value);
        e.target.previousSibling.textContent = newVoteCount;
      });
      postWrapper.appendChild(clonedPost);

      divBox.appendChild(postWrapper);
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
  const topic = form.get("topic");
  const postContent = form.get("post");

  const postData = {
    topic: topic,
    content: postContent,
  };
  const userToken = localStorage.getItem("token");

  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${userToken}`
    },
    body: JSON.stringify(postData),
  };
  const result = await fetch("/discussions", options);
  const responseData = await result.json();

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
  //delete this tempToken
  tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ3ZWRpZGl0MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTI5NTA4NTAsImV4cCI6MTY5Mjk1NDQ1MH0.wfuQSzacLJGdSadBPCC84Cl5WYtlrrYXjVbQF5nToxY"
  const options = {
    headers: {
      Authorization: tempToken,
    },
  };

  const response = await fetch("/discussions");

  if (response.status == 200) {
    const posts = await response.json();
    const container = document.getElementById("posts");

    posts.forEach((p) => {
      const elem = createPostElement(p);

      allPosts.push(elem);
      container.appendChild(elem);
    });
  } else {
    console.log("Error loading the page");
  }
}

loadPosts();

async function handleVote(post_id) {
  const response = await fetch(`/discussions/${post_id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
  });
  if (response.status == 200) {
    const updatedPost = await response.json();
    console.log(updatedPost);
    return updatedPost["votes"];
  } else {
    console.error("Failed to vote");
    return -1; // Or any other error handling logic
  }
}
