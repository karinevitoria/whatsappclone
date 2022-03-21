(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var li = $("#barra li");

li.click(function () {
    li.removeClass("active");
    $(this).addClass("active");
});


function clickBotao(){
  mudaConversa()
}

function mudaConversa(){
  $("#content").load("./conversas.html")
}

clickBotao()
