$(document).ready(function(){

  $(".dropdown:has(.dropdown-toggle)").click(function(){
    if ($(this).find(".dropdown-menu").is(":visible")) {
      $(".dropdown-menu").hide();
    } else {
      $(".dropdown-menu").hide();
      $(this).find(".dropdown-menu").toggle();
    }
  });
});

// Dovrebbe far chiudere le finestre al click

// $(document).on("click", function(event){
//  var hide = $(".dropdown-toggle");
//  if(hide !== event.target && !hide.has(event.target).length){
//      $(".dropdown-menu").hide();
//  });




// Soluzione -non completa- con hover

// $(document).ready(function() {
//   var iconDrop = $('a.my-dropdown-toggle');
//
//   iconDrop.hover(function(){
//        $(this).next().delay(20).slideDown(300);
//   }, function(){
//        $(this).next().delay(20).slideUp(300);
//   });
//
// });
