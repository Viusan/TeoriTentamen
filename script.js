console.log("hei");

$(".startButton").click(function() {
  $(this).addClass("animation");
    setInterval(function() {
  $(".startButton").removeClass("animation");
  }, 2000);
});
