let expandSection = document.querySelector(".click-to-expand");

let arrowButton = document.querySelector(".arrow-down");
let rightContent = document.querySelector(".right-content");
let mediaContent = document.querySelector(".media-icons");
let postBoxes = document.querySelectorAll(".post-boxes");
let mainContent = document.querySelector(".main-content");
let postLabels = document.querySelectorAll(".post-label");

expandSection.addEventListener("mouseover", function () {
    arrowButton.classList.add("hovered");
})

expandSection.addEventListener("mouseleave", function () {
    arrowButton.classList.remove("hovered");
})

expandSection.addEventListener("click", function () {
    rightContent.remove();
    mainContent.style.height = "1500px";
    postLabels[0].classList.add("onExpand-postLabel");
    postBoxes[0].classList.add("onExpand-boxes");
    postBoxes[1].classList.add("onExpand-boxes");
    expandSection.classList.add("onExpand-expandSection");
    arrowButton.classList.add("onExpand-arrow");
    //mediaContent.classList.add("hide");
})

arrowButton.addEventListener("click", function () {
    rightContent.classList.add("hide");
})

