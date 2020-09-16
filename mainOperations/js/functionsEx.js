function writerSample(iD, textContent) {
    var inputSource = document.getElementById(iD);
    inputSource.textContent = textContent;
}

function textGen(textOne, textTwo) {
    return (textOne + " " + textTwo);
}

writerSample("funcEx", textGen("Hello", "some functions!"));