var fullPage = document.getElementsByClassName("first-page")[0],
  monster = fullPage.getElementsByClassName("monster")[0],
  progress = document.getElementsByClassName("loading-p")[0],
  bar = document.getElementsByClassName("progress-bar")[0],
//   firstP = document.getElementsByClassName("first-page")[0],
 width = 0,
 timer = null;
//  console.log(typeof len);
// console.log(monster);
timer = setInterval(() => {
    bar.style.width = width + '%'
    if (width == 100) {
        clearInterval(timer)
        fullPage.classList.add("completed") 
        // monster.style.transition = "transform 1s"
        // monster.style.transform =
        //   "scale(0.01) rotate(45deg)";
        fullPage.style.opacity = 0;
        // fullPage.style.display = "none"直接消失即使有过渡动画也不会起到效果
    }else{
        width += 1;
         }
}, 30);