let svg = document.querySelector(".svg-container");
let pathGroup = svg.querySelector(".path-group");
let paths = Array.from(pathGroup.querySelectorAll("path"));



function bringToFront(path) {
    pathGroup.removeChild(path);
    pathGroup.appendChild(path);
}

function restoreOrder(path) {
    // Check if the path is still a child of pathGroup before reinserting
    if (!pathGroup.contains(path)) {
        pathGroup.appendChild(path);
    }
}


paths.forEach(function (item) {
    var pathLength = item.getTotalLength();
    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);
    item.classList.toggle("new");

    item.addEventListener("mouseover", function () {
        bringToFront(item);
    });

    item.addEventListener("mouseout", function () {
        restoreOrder(item);
    });
});


