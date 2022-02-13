var quoteArray = ["I'm Nethmina, A Web, Mobile and Desktop developer from Sri Lanka.. "];
var textPosition = 0; 
var speed = 70;

function greeting() {
    
}

function showIntro() {
    typewriter = () => {
        document.querySelector("#about-me-welcome").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
      
        if(textPosition++ != quoteArray[0].length)
          setTimeout(typewriter, speed);
      }
      
      window.addEventListener("load", typewriter)
}

// After a complete page loading
document.addEventListener('DOMContentLoaded', function() {
    showIntro();
}, false);

setTimeout(()=>{
    console.log("eat");
  },2000)

  setTimeout(()=>{
    document.getElementById("text").style.display = 'none';

},2000)
