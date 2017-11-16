$( document ).ready(function() {

  $( "#requestButton" ).click(function() {
    $(".requestedImage").html(' <img src="//images.contentful.com/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"> ');

    var width = $("#imageWidth").val();
    var height = $("#imageHeight").val();
    var imageQuality = $("#imageQuality").val();

    console.log(width);
    console.log(height);
    console.log(imageQuality);

  });



});
