let expandSection = document.querySelector(".click-to-expand");

let arrowButton = document.querySelector(".arrow-down");
let rightContent = document.querySelector(".right-content");
let mediaContent = document.querySelector(".media-icons");
let postBoxes = document.querySelectorAll(".post-boxes");
let mainContent = document.querySelector(".main-content");
let postLabels = document.querySelectorAll(".post-label");
let removedContent = null;

expandSection.addEventListener("mouseover", function () {
    arrowButton.classList.add("hovered");
})

expandSection.addEventListener("mouseleave", function () {
    arrowButton.classList.remove("hovered");
})

expandSection.addEventListener("click", function () {

    if (!removedContent) {
        // Add the "flip-out" class to initiate the flip animation
        rightContent.classList.add("flip-out");

        // After the animation completes, remove the element and store it
        rightContent.addEventListener("animationend", function () {
            removedContent = rightContent.cloneNode(true); // Clone the content
            rightContent.remove();

            mainContent.style.height = "1500px";
            postLabels[0].classList.toggle("onExpand-postLabel");
            postBoxes[0].classList.toggle("onExpand-boxes");
            postBoxes[1].classList.toggle("onExpand-boxes");
            expandSection.classList.toggle("onExpand-expandSection");
            arrowButton.classList.toggle("onExpand-arrow");
        }, { once: true });
    } else {
        mainContent.appendChild(removedContent);
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

arrowButton.addEventListener("click", function () {
    rightContent.classList.add("hide");
})

