const buton = document.querySelector("#IdButon");

buton.addEventListener("click", (event) => {
    console.log("Clic pe buton!");
    document.getElementById("text1").value = "Gigi Coder";
});

const btn = document.getElementById("submit-btn");
btn.addEventListener("click", function (e) {
    e.preventDefault();
});

const txtInput = document.getElementsByClassName("txtInput");

txtInput[0].style.backgroundColor = "aqua";

const heading = document.querySelector(".sub-container > h2");

heading.style.color = "red";

const nodeList = document.querySelectorAll(".sub-container");

for (const node of nodeList) {
    node.style.backgroundColor = "aquamarine";
}

nodeList.forEach((node) => {
    node.style.backgroundColor = "aquamarine";
});

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "aquamarine";
}
function schimbaCulori() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
    this.style.color = "#FFF8DC";
}
nodeList.forEach((node) => node.addEventListener("click", schimbaCulori));