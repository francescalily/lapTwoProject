let expandSection = document.querySelector(".click-to-expand");
let profileSection = document.querySelector(".profile-section");
let arrowButton = document.querySelector(".arrow-down");
let rightContent = document.querySelector(".right-content");
let mediaContent = document.querySelector(".media-icons");
let postBoxes = document.querySelectorAll(".post-boxes");
let mainContent = document.querySelector(".main-content");
let postLabels = document.querySelectorAll(".post-label");
let container = document.querySelector(".container");
let removedContent = null;

expandSection.addEventListener("mouseover", function () {
    arrowButton.classList.add("hovered");
})

expandSection.addEventListener("mouseleave", function () {
    arrowButton.classList.remove("hovered");
})

arrowButton.addEventListener("click", function () {
    rightContent.classList.add("hide");
})

let isExpanded = false;

expandSection.addEventListener("click", function () {
    if (!isExpanded) {
        // Initiate flip out animation
        rightContent.classList.add("flip-out");

        setTimeout(function () {
            removedContent = rightContent.cloneNode(true); // Clone the content
            rightContent.remove();
        }, 400);

        // Add classes for expanding
        mainContent.style.height = "2500px";
        container.classList.add("onExpand-container");
        postLabels[0].classList.add("onExpand-postLabel");
        postBoxes[0].classList.add("onExpand-boxes");
        postBoxes[1].classList.add("onExpand-boxes");
        expandSection.classList.add("onExpand-expandSection");
        arrowButton.classList.add("onExpand-arrow");

        // Update state
        isExpanded = true;
    } else {
        // Remove the "flip-out" class to reset the animation
        rightContent.classList.remove("flip-out");

        // Reset styles and classes for retracting
        mainContent.style.height = "auto";
        postLabels[0].classList.remove("onExpand-postLabel");
        postBoxes[0].classList.remove("onExpand-boxes");
        postBoxes[1].classList.remove("onExpand-boxes");
        expandSection.classList.remove("onExpand-expandSection");
        arrowButton.classList.remove("onExpand-arrow");

        // Append the removed content back to the right-content
        profileSection.appendChild(rightContent);
        //rightContent.appendChild(removedContent);
        removedContent = null; 

        // Update state
        isExpanded = false;
    }
});

async function check() {
    if(await checkToken() !== true) {
        window.location.assign("/");
    }
}

check();

function fetchCreatedDiscussions() {
    const userToken = localStorage.getItem("token");
    
    if (userToken) {
        const payload = userToken.split('.')[1]; // Extract the payload part
        const decodedPayload = JSON.parse(atob(payload)); // Decode and parse the payload
        const username = decodedPayload.username; // Access the username
        console.log(username)
      // Use the username in your fetch options
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
        },
    };
      // Fetch discussions using the username
    fetch(`/discussions/users/${username}`, options)
        .then(response => response.json())
        .then(oneDiscussion => {
            console.log(oneDiscussion);
          // Handle the fetched discussion data
            const createdPostsContainer = document.getElementById("created-posts");

          // Clear any previous posts
            createdPostsContainer.innerHTML = "";
            oneDiscussion.forEach(discussion => {
                const postElement = createDiscussionElement(discussion);
                createdPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error("Failed to get discussions:", error);
        });
    } else {
        console.error("Token not found in local storage.");
    }
}

function createDiscussionElement(discussion) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const topicDiv = document.createElement("div");
    topicDiv.classList.add("topic");
    topicDiv.textContent = discussion.topic;

    const contentP = document.createElement("p");
    contentP.textContent = discussion.content;

    postDiv.appendChild(topicDiv);
    postDiv.appendChild(contentP);

    return postDiv;
}

window.onload = () => {
    fetchCreatedDiscussions();
}

