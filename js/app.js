
    
$("#generate").on("click", function(){
    var input = $("#numberInput").val();
    if ( isNaN(input) ){
        $("#errorMessage").html("Please enter a valid integer");
        return;
    }
    $("#errorMessage").html("");
    
    var url = "https://dog.ceo/api/breeds/image/random/"+input;
    $.ajax({
        method: "GET",
        url: url,
        dataType: "json",
        success: function(result, status){
            alert("success");
            console.log(result);
            for ( var i in result.message ){
                var img = "<img class='img-thumbnail' src='"+result.message[i]+">";
                var div = "<div class='flex-item>"+img+"</div>";
                $("#doggos").append(div);
            }
        },
        error: function(status, error){
            alert("failure");
        }
    });
});