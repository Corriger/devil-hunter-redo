$(document).ready(function() {
    $("header a").on('click', function(event) {
        var display = "#" + $(this).attr("href")
        var seeShit = "rgba(5,1,0,.7)"
          event.preventDefault();
          $(display).addClass("current").css("background", seeShit)
          $("main article").not(display).removeClass("current")
    })
    $("#tab-3 a").on('click', function(event) {
        event.preventDefault()
        var style = "#" + $(this).attr("href")
        $(style).addClass("current")
        $("#tab-3 article").not(style).removeClass("current")
        $(style).fadeIn("slow")
    })
    $("#tab-4 a").on('click', function(event) {
        event.preventDefault()
        var gun = "#" + $(this).attr("href")
        $(gun).addClass("current")
        $("#tab-4 article").not(gun).removeClass("current")
        $(gun).fadeIn("slow")
    })
    $("#tab-5 a").on('click', function(event) {
        var dA = "#" + $(this).attr("href")
        var bell = "http://profiles.rphaven.com/The%20Legendary%20Devil%20Bane"
        var bellLink = $(dA + "a").attr("href", bell)
        if (dA != bellLink) {
            event.preventDefault()
            $(dA).addClass("current")
            $("#tab-5 article").not(dA).removeClass("current")
            $(dA).fadeIn("slow")
        }
    })
})

/*$("header a, #tab- a").on('click',function(event){
  event.preventDefault()
  var display = "#" + $(this).attr("href")
  $(display).addClass("current")
  $("main section article").not(display).removeClass("current")
})*/









// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
