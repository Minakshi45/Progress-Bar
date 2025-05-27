console.log("Script is running");



window.addEventListener("scroll", () => {
    console.log("scrolling");
    console.log(window.innerHeight, "Screen height");
    console.log("Body height", document.body.scrollHeight);
    console.log("Scroll top", document.documentElement.scrollTop)


    let scrollPercentage = Math.floor(100 * (document.documentElement.scrollTop / (document.body.scrollHeight - window.innerHeight)))
    console.log("scrollPercentage", scrollPercentage)

    const progressBar=document.getElementsByClassName('progressBar')[0]

    progressBar.style.width=`${scrollPercentage}%`

})