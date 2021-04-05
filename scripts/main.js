displayText = function(toShow, toAdd){
    for(let i = 0; i < toShow.length; i++){
        setTimeout(function () {
            toAdd.append(toShow.charAt(i));
        }, 125 * i);
    }
};


main = function (){
    const about = document.getElementById("about");
    const port = document.getElementById("portfolioHead");
    const resume = document.getElementById("resumeHead");
    displayText("About Me", about);
    displayText("Portfolio", port);
    displayText("Resume", resume);
};


main();

