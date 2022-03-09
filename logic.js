let isItalic = false;
let isBold = false;
let isStrike = false;
let isSuper = false;

function updateMarkdown(e) {
    let markdown = document.getElementById("markdown");
    // alphanumeric character
    if (e.inputType == "insertText") {
        if (isItalic && isBold) {
            markdown.value = markdown.value.substring(0, markdown.value.length - 3) + e.data + markdown.value.substring(markdown.value.length - 3);
        }
        else if (isItalic) {
            markdown.value = markdown.value.substring(0, markdown.value.length - 1) + e.data + markdown.value.substring(markdown.value.length - 1);
        }
        else if (isBold) {
            markdown.value = markdown.value.substring(0, markdown.value.length - 2) + e.data + markdown.value.substring(markdown.value.length - 2);
        }
        else
            markdown.value += e.data;
    }
    // backspace
    else if (e.inputType == "deleteContentBackward") {
        if (isItalic && isBold) {
            if (markdown.value.substring(markdown.value.length - 6) == "******") {
                markdown.value = markdown.value.substring(0, markdown.value.length - 7);
                toggleBold(e);
                toggleItalic(e);
            }
            else
                markdown.value = markdown.value.substring(0, markdown.value.length - 4) + "***";
        }
        else if (isItalic) {
            if (markdown.value.substring(markdown.value.length - 2) == "**") {
                markdown.value = markdown.value.substring(0, markdown.value.length - 3);
                toggleItalic(e);
            }
            else
                markdown.value = markdown.value.substring(0, markdown.value.length - 2) + "*";            
        }
        else if (isBold) {
            if (markdown.value.substring(markdown.value.length - 4) == "****") {
                markdown.value = markdown.value.substring(0, markdown.value.length - 5);
                toggleBold(e);
            }
            else
                markdown.value = markdown.value.substring(0, markdown.value.length - 3) + "**";            
        }
        else
            markdown.value = markdown.value.substring(0, markdown.value.length - 1);
    }
    // enter
    else if (e.inputType == "insertLineBreak") {
        markdown.value += "\n";
    }
}

function toggleItalic(e) {
    let markdown = document.getElementById("markdown");
    e.preventDefault();
    // turning italic on
    if (!isItalic) {
        console.log("italic on");
        isItalic = true;
        markdown.value += "**";
    }
    // turning italic off
    else {
        console.log("italic off");
        isItalic = false;
    }
}

function toggleBold(e) {
    let markdown = document.getElementById("markdown");
    e.preventDefault();
    // turning bold on
    if (!isBold) {
        console.log("bold on");
        isBold = true;
        markdown.value += "****";
    }
    // turning bold off
    else {
        console.log("bold off");
        isBold = false;
    }
}