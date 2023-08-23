let expandSection = document.querySelector(".click-to-expand");
let profileSection = document.querySelector(".profile-section");
let arrowButton = document.querySelector(".arrow-down");
let rightContent = document.querySelector(".right-content");
let mediaContent = document.querySelector(".media-icons");
let postBoxes = document.querySelectorAll(".post-boxes");
let mainContent = document.querySelector(".main-content");
let postLabels = document.querySelectorAll(".post-label");
let container = document.querySelectorAll(".container");
let removedContent = null;

expandSection.addEventListener("mouseover", function () {
    arrowButton.classList.add("hovered");
})

expandSection.addEventListener("mouseleave", function () {
    arrowButton.classList.remove("hovered");
})

/*
expandSection.addEventListener("click", function () {

    if (!removedContent) {
        // Add the "flip-out" class to initiate the flip animation
        rightContent.classList.add("flip-out");

        // After the animation completes, remove the element and store it
        rightContent.addEventListener("animationend", function () {
            removedContent = rightContent.cloneNode(true); // Clone the content
            rightContent.remove();

            mainContent.style.height = "1500px";
            postLabels[0].classList.add("onExpand-postLabel");
            postBoxes[0].classList.add("onExpand-boxes");
            postBoxes[1].classList.add("onExpand-boxes");
            expandSection.classList.add("onExpand-expandSection");
            arrowButton.classList.add("onExpand-arrow");
        }, { once: true });
    } else {
        profileSection.appendChild(removedContent);
        rightContent = removedContent;
        //rightContent.remove();
        mainContent.style.height = "auto"; // Reset the height
        postLabels[0].classList.remove("onExpand-postLabel");
        postBoxes[0].classList.remove("onExpand-boxes");
        postBoxes[1].classList.remove("onExpand-boxes");
        expandSection.classList.remove("onExpand-expandSection");
        arrowButton.classList.remove("onExpand-arrow");
        rightContent.classList.remove("hide");
        //mediaContent.classList.add("hide");
        //rightContent.add()
    }
    
})

*/
arrowButton.addEventListener("click", function () {
    rightContent.classList.add("hide");
})

let isExpanded = false;

expandSection.addEventListener("click", function () {
    if (!isExpanded) {
        // Add the "flip-out" class to initiate the flip animation
        rightContent.classList.add("flip-out");

        // After the animation completes, remove the element and store it
        rightContent.addEventListener("animationend", function () {
            removedContent = rightContent.cloneNode(true); // Clone the content
            rightContent.remove();
        }, { once: true });

        // Add classes for expanding
        mainContent.style.height = "1500px";
        
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

        // Remove the removed content from the rightContent container
        

        // Append the removed content back to the right-content
        profileSection.appendChild(rightContent);
        //rightContent.appendChild(removedContent);
        removedContent = null; // Reset removedContent

        // Update state
        isExpanded = false;
    }
});



