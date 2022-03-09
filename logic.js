var isItalic = false;
var isBold = false;
var isStrike = false;
var isSuper = false;

function updateMarkdown() {
    console.log(document.getElementById("input").value);
    document.getElementById("markdown").value = document.getElementById("input").value;
}

function toggleItalic() {
    if (isItalic) {
        console.log("italic off");
        document.getElementById("markdown").value += "*";
        isItalic = false;
    }
    else {
        console.log("italic on");
        console.log("italic off");
        document.getElementById("markdown").value += "*";
        isItalic = false;
        isItalic = true;
    }
}