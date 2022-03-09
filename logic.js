let isItalic = false;
let isBold = false;
let isStrike = false;
let isSuper = false;

function updateMarkdown(e) {
    console.log(e);
    // alphanumeric character
    if (e.inputType == "insertText") {
        document.getElementById("markdown").value += e.data;
    }
    // backspace
    else if (e.inputType == "deleteContentBackward") {
        document.getElementById("markdown").value = document.getElementById("markdown").value.slice(0, -1);
    }
    // enter
    else if (e.inputType == "insertLineBreak") {
        document.getElementById("markdown").value += "\n";
    }
}

function toggleItalic(e) {
    e.preventDefault();
    // turning italic on
    if (!isItalic) {
        console.log("italic on");
        isItalic = true;
        document.getElementById("markdown").value += "*";
    }
    // turning italic off
    else {
        console.log("italic off");
        isItalic = false;
        document.getElementById("markdown").value += "*";
    }
}