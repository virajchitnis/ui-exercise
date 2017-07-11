var sidebarVisible = false;

$(document).ready(function(){
  $("#sidebar_button").click(function() {
    $("body").removeClass("no-transition");
    if (!sidebarVisible) {
      $("#content").addClass('small');
      $("#sidebar").addClass('visible');
      $("#content").removeClass('large');
      $("#sidebar").removeClass('hidden');
    } else {
      $("#content").addClass('large');
      $("#sidebar").addClass('hidden');
      $("#content").removeClass('small');
      $("#sidebar").removeClass('visible');
    }
    sidebarVisible = !sidebarVisible;
  });
});
