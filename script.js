$( document ).ready(function() {

  $( "#requestButton" ).click(function() {

    var width = $("#imageWidth").val();
    var height = $("#imageHeight").val();
    var imageQuality = $("#imageQuality").val();

    if ($("#paddingCheckbox").is(':checked')){
      var fit = 'pad';
      var paddingColorValue = $("#paddingColor").val().slice(1);

    }
    else{
      var fit = 'scale';
      var paddingColorValue = 'ffffff';
    }

    var requestURL = "https://images.contentful.com/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg?w="+width+"&h="+height+"&fit="+ fit +"&bg=rgb:"+paddingColorValue+"&q=" + imageQuality +"";

    $(".requestedImage").html(" <img src=" + requestURL + "> ");
    $("#jumbotronStatus").text("Request URL: " + requestURL)

  });

});
