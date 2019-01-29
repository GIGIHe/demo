$(".box .menus li").each((index, el) => {
  //     // console.log(index,el);
  //     let id = $(this).index()
  //     $(this).on('mouseenter',function(){
  //         $(this).addClass('bg').siblings().removeClass('bg')
  //         console.log(id);
  //     })
  $(".right").css("display", "none");
  $(".box .menus li").on("mouseenter", function() {
    let i = $(this).index();
    //   console.log($(this).index());
    $(".right").css("display", "block");
    $(this)
      .addClass("bg")
      .siblings()
      .removeClass("bg");
    $(".tab .scroll").css("margin-top", -i * 600 + "px");
    var arr = [
      "../img/bg1.png",
      "../img/bg2.png",
      "../img/bg3.png",
      "../img/bg4.png",
      "../img/bg5.png",
      "../img/bg6.png",
      "../img/bg7.png"
    ];
    $(".tab").css("background-image", "url(" + arr[i] + ")");
  });
  // $(".box .menus li").mouseleave(function(){
  //     $(".right").css("display", "none");
  // 不合理
  // })
  $(".box").mouseleave(function(){
      $(".right").css("display", "none");
  })
});
