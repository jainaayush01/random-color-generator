function getColorCode() {
    let hex = "012345678abcdef";
    let clr = "";
    for (let i = 0; i < 6; ++i) {
        let ch = Math.floor(Math.random() * 16);
        clr += hex.substring(ch, ch + 1);
    }
    return "#" + clr;
}

console.log(window.Clipboard);
for (let i = 0; i < 50; ++i) {
    const color = document.createElement("div");
    color.classList.add("color");
    document.querySelector(".colors-container").appendChild(color);
    color.addEventListener("click", (event) => {
        copyToClipboard(color.innerHTML);
        alert("Copied the text: " + color.innerHTML);
    });
}

function genNewColors() {
    const colors = document.querySelectorAll(".color");
    colors.forEach((x) => {
        var colorCode = getColorCode();
        x.style.backgroundColor = colorCode;
        x.innerHTML = colorCode;
    });
}

genNewColors();

function copyToClipboard(text) {
    const elem = document.createElement("textarea");
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
