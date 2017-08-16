$(document).ready(function(){ 
    $('#characterLeft').text('140 caracteres restantes');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Você atingiu o limite');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' caracteres restantes');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});

$(function($){
    $("form").submit(function(event) {

        event.preventDefault();

        $.ajax({
        url: "https://formspree.io/marcinha.gina@hotmail.com", 
        method: "POST",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            assunto: $("#subject").val(),
            message: $("#message").val()
        },
        dataType: "json"
        }).done(function(){
            $("#name").val("");
            $("#email").val("");
            $("#subject").val("");
            $("#message").val("");
            alert("Email enviado com sucesso!");
        }).fail(function(){
            alert("Erro ao enviar email!");
        });
    });

}) ;

$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});
$('.carousel').carousel({
    interval: 3000
})

$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pauseOnHover: true,
    interval: 1000,
  });
    });