$(document).ready(function(){
  $("header a").on('click',function(event){
    event.preventDefault()
    var display = $(this).attr("href")
    $("#" + display).addClass("current")
    $("article").not("#" + display).removeClass("current")
  })
  $("#tab-3 li a").on('click',function(event){
    event.preventDefault()
    var style = $(this).attr("href")
    $("#" + style).addClass("current")
    console.log(style)
    $("#tab-3 article").not("#" + style).removeClass("current")
  })

})














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
