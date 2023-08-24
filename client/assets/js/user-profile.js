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
        mainContent.style.height = "1500px";
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

async function fetchCreatedDiscussions() {
    try {
        const response = await fetch('https://florin-council-jtgy.onrender.com/discussions/users/7'); // Replace with your API endpoint for fetching created posts
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching created posts:', error);
        return [];
    }
}
