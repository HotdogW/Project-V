setTimeout(()=>{
    document.getElementById("line1").classList.remove("line1")
    document.getElementById("line2").classList.remove("line2")
    document.getElementById("line3").classList.remove("line3")
    document.getElementById("line4").classList.remove("line4")
    document.getElementById("line5").classList.remove("line5")
    document.getElementById("line6").classList.remove("line6")
    document.getElementById("line7").classList.remove("line7")

    document.getElementById("line1").classList.add("second")
    document.getElementById("line2").classList.add("second")
    document.getElementById("line3").classList.add("second")
    document.getElementById("line4").classList.add("second")
    document.getElementById("line5").classList.add("second")
    document.getElementById("line6").classList.add("second")
    document.getElementById("line7").classList.add("second")
}, 27000 );
setTimeout(()=>{
    document.getElementById("line3").style.fontSize = "2em"
    document.getElementById("line4").style.fontSize = "2em"
    document.getElementById("line4").style.marginBottom = "0em"
    document.getElementById("line5").style.fontSize = "0.83em"

    document.getElementById("line3").innerHTML = "I'll love you forever."
    document.getElementById("line4").innerHTML = "Happy Valentine's Day!"
    document.getElementById("line5").innerHTML = "Click Me!"
    document.getElementById("test").innerHTML = "💜"

    document.getElementById("line3").classList.remove("second")
    document.getElementById("line4").classList.remove("second")
    document.getElementById("line5").classList.remove("second")

    document.getElementById("line3").classList.add("line1")
    document.getElementById("line4").classList.add("line2")
    document.getElementById("line5").classList.add("line4")
    document.getElementById("test").classList.add("test")
    document.getElementById("test").classList.add("heart1")

    document.getElementById("test").addEventListener("click", growDiv)
    document.getElementById("test").addEventListener("mouseover", function() {
    this.style.cursor = "pointer"})
    document.getElementById("test").addEventListener("mouseout", function() {
    this.style.cursor = "auto"})
}, 28000 );
setTimeout(()=>{
    document.getElementById("test").classList.remove("heart1")
    document.getElementById("test").classList.add("heart2")
}, 35000 );
function growDiv(){
    document.getElementById("test").classList.remove("heart2")
    test.style.transform = "scale(500)"
    setTimeout(()=>{
        document.getElementById("bodyBg").style.backgroundColor = "rgb(136, 108, 228)"
        window.location.href = "vFile2.html"
    }, 5000 );
    
}

