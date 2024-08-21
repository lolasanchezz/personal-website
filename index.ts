//making cursor move
console.log("run")


const textArea = document.getElementById('termInput') as HTMLInputElement;
textArea.addEventListener("oninput", () => {

   
    const letterLength = textArea.value.length;

    const widthOfInput = parseInt(document.getElementById('input').style.width);
    console.log("e")
    textArea.style.width = ((letterLength * (0.5 * widthOfInput)).toString()) + "px";
});


