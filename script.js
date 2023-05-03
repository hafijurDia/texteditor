//textarea get
const textArea = document.getElementById('editor');

//make font bold
function f2(e){
    if (textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.fontWeight = "bold"
        e.classList.add('focus-within:bg-sky-300');
    }
    
}

//make font italic
function f3(e){
    if (textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.fontStyle = "italic"
        e.classList.add('focus-within:bg-sky-300');
    }
    
}

//text decoration underline
function f4(e){
    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.textDecoration = "underline"
        e.classList.add('focus-within:bg-sky-300');
    }
    
}

//text align left
function f5(e){
    if (textArea.style.textAlign == "center" || textArea.style.textAlign == "right" || textArea.style.textAlign == "justify") {
        textArea.style.textAlign = "left";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.textAlign = "left"
        e.classList.add('focus-within:bg-sky-300');
    }
    
}

//text align center
function f6(e){
    if (textArea.style.textAlign == "left" || textArea.style.textAlign == "right" || textArea.style.textAlign == "justify") {
        textArea.style.textAlign = "center";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.textAlign = "center"
        e.classList.add('focus-within:bg-sky-300');
    }
}

//text align right
function f7(e){
    if (textArea.style.textAlign == "left" || textArea.style.textAlign == "center" || textArea.style.textAlign == "justify") {
        textArea.style.textAlign = "right";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.textAlign = "right"
        e.classList.add('focus-within:bg-sky-300');
    }
}

//text align justify
function f8(e){
    if (textArea.style.textAlign == "left" || textArea.style.textAlign == "center" || textArea.style.textAlign == "right") {
        textArea.style.textAlign = "justify";
        e.classList.remove('focus-within:bg-sky-300');
    }else{
        textArea.style.textAlign = "justify"
        e.classList.add('focus-within:bg-sky-300');
    }
}

//font-size change
function f9(e){
    let fontSize = e.value;
    textArea.style.fontSize = fontSize + 'px';

}

//uppercase 
function f10(e){
    if (textArea.style.textTransform = "none") {
        textArea.style.textTransform = "uppercase";
        e.classList.remove('focus-within:bg-sky-300');
    }
}

//lowercase 
function f11(e){
    if (textArea.style.textTransform = "uppercase") {
        textArea.style.textTransform = "lowercase";
        e.classList.remove('focus-within:bg-sky-300');
    }
}

//text color change 
function f12(e){
    let textColor = e.value;
    textArea.style.color = textColor;
}