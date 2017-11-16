$( document ).ready(function() {

  $( "#requestButton" ).click(function() {

    var width = $("#imageWidth").val();
    var height = $("#imageHeight").val();
    var imageQuality = $("#imageQuality").val();

    var requestURL = "https://images.contentful.com/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg?w="+width+"&h="+height+"&fit=scale&q=" + imageQuality +"";

    $(".requestedImage").html(" <img src=" + requestURL + "> ");

  });

});
