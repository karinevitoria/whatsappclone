(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var li = $("#barra li");

li.click(function clicando() {
    li.removeClass("active");
    $(this).addClass("active");
});

  mudaConversa()


function mudaConversa(){
  $("#content").load("./pages/conversas.html")
}

