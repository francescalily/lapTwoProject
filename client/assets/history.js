let svg = document.querySelector(".svg-container");
let pathGroup = svg.querySelector(".path-group");
let paths = Array.from(pathGroup.querySelectorAll("path"));
let activeSVG = null;
let svg1 = document.querySelector("#svg1");
let svg2 = document.querySelector("#svg2");
let svg3 = document.querySelector("#svg3");
let drawer = document.querySelector(".drawer-right");
let drawerContent = document.querySelectorAll(".drawer-content");
let content_svg1 = document.querySelector("#content-svg1");
let content_svg2 = document.querySelector("#content-svg2");
let content_svg3 = document.querySelector("#content-svg3");

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


svg1.addEventListener("click", function () {
    if (activeSVG !== svg1) {
        closeDrawer();
        setTimeout(() => {openDrawer(svg1); }, 200);
        activeSVG = svg1;
        svg.classList.add("left")
    } else {
        closeDrawer();
        svg.classList.remove("left");
        activeSVG = null;
    }
});


svg2.addEventListener("click", function () {
    if (activeSVG !== svg2) {
        closeDrawer();
        setTimeout(() => {openDrawer(svg2); }, 200);
        activeSVG = svg2;
        svg.classList.add("left")
    } else {
        closeDrawer();
        svg.classList.remove("left");
        activeSVG = null;
    }
});

svg3.addEventListener("click", function () {
    closeDrawer();
    if (activeSVG !== svg3) {
        setTimeout(() => {openDrawer(svg3); }, 200);
        activeSVG = svg3;
        svg.classList.add("left")
    } else {
        svg.classList.remove("left");
        activeSVG = null;
    }
});

/*
function openDrawer(svg) {
    // Hide all content first

    //document.querySelectorAll(".drawer-content").forEach(content => {
      //  content.classList.add("hidden");
   // });

    drawerContent.forEach(content => {
        content.classList.add("hidden");
    })

    if (svg === svg1) {
        console.log("Opening svg1 content");
        content_svg1.classList.remove("hidden");
        //const text5 = document.createElement('p')
        //text5.insertAdjacentText('beforeend', 'Here we go!')
        //drawerClosed.insertAdjacentElement("beforeend", text5)
        //document.querySelector("#content-sv2 > p").set
    } else if (svg === svg2) {
        console.log("Opening svg2 content");
        content_svg2.classList.remove("hidden");
    } else if (svg === svg2) {
        console.log("Opening svg3 content");
        content_svg3.classList.remove("hidden");
    }
    drawer.classList.add("open");
}*/

function openDrawer(contentElement) {
    drawerContent.forEach(content => {
        content.classList.add("hidden");
    });

    contentElement.classList.remove("hidden");
    drawer.classList.add("open");
}

function closeDrawer() {
    //drawerContent.classList.add("hidden");
    drawer.classList.remove("open");
}