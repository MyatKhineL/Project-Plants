$(document).ready(function(){

let screenHeight = $(window).height();
// console.log(screenHeight)

$(window).scroll(function(){

let currentPosition = $(this).scrollTop();
// console.log(currentPosition);
if(currentPosition >= screenHeight-100){
    $(".site-nav").addClass("site-nav-scroll");
}else{
    $(".site-nav").removeClass("site-nav-scroll");
    setActive("home");
}

});

$(".navbar-toggler").click(function(){

    let result = $(".navbar-collapse").hasClass("show");
    // console.log(result);
    if(result){
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars")
    }else{
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }

});
//  var waypoints = $('#home').waypoint( function(direction) {
//     console.log("I am home");    
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#home']").addClass("current-section");
//     },{
//       offset:'25%'
//     });
    
//     var waypoints = $('#about').waypoint( function(direction) {
//     console.log("I am about");    
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#about']").addClass("current-section");
   
//     },{
//       offset:'25%'
//     });
   
//     var waypoints = $('#products').waypoint( function(direction) {
//     console.log("I am products");
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#products']").addClass("current-section");    
//     },{
//       offset:'25%'
//     });

    var waypoints=$('#contact').waypoint( function(direction) {
    console.log("I am contact");
    $(".nav-link").removeClass("current-section");
    $(".nav-link[href='#contact']").addClass("current-section");    
    },{
    offset:'75%'
    });


function setActive(current){
  $(`.nav-link`).removeClass("current-section");

  $(`.nav-link[href='#${current}']`).addClass('current-section');
 }

 function navScroll(){
 let currentSection = $("section[id]");
 currentSection.waypoint(function (direction){
  
   if(direction =="down"){
       let currentSectionId = $(this.element).attr('id');
       console.log(currentSectionId);
       setActive(currentSectionId);
   }


 },{offset:'80px'});

 currentSection.waypoint(function(direction){
   if(direction =="up"){
       let currentSectionId = $(this.element).attr('id');
       console.log(currentSectionId);
       setActive(currentSectionId);
   }
 },{offset:'80px'});
 }
 navScroll();

});
$(window).on("load",function(){
  $('.loader-container').fadeOut(500,function(){
      $(this).remove();
  });
});