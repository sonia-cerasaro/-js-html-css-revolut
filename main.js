$(document).ready(function(){
  var iconDrop = $('a.my-dropdown-toggle');


  iconDrop.click(function(){
    $(this).parents().next().toggleClass('.active');
  })

});
