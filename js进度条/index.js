function Pro() {
  // console.log(this);
}
new Pro();
var num = document.getElementsByClassName("num")[0];
var line = document.getElementsByClassName("top-line")[0];
var inp = document.getElementById("inp");
var width = 0;
inp.onblur = function() {
  var value = inp.value//把值存起来后面使用
  console.log(inp.value);
  if (inp.value >= 0 && inp.value <= 100) {
    num.innerHTML = inp.value + "%";
    var timer = function() {
      width = width + 1;
      line.style.width = width + "%";
      if (width >= value) {
        console.log(value);
        console.log('hh',width);
        clearInterval(i)
      }
    };
   var  i =  setInterval(timer, 10);
    // line.style.width = inp.value + "%"
    // console.log(line.style.width);
    // var timer = setInterval(() => {
    //   width = width + 1;
    //   line.style.width = width + "%";
    //   if (width >= value) {
    //     console.log(value);
    //     console.log("hh", width);
    //     clearInterval(timer);
    //   }
    // }, 10);
  } else {
    alert("请输入正确的数字");
  }
  inp.value = "";
};

// 清除的是定时器而不是定时器的第一个参数