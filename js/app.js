
    
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
        },
        error: function(status, error){
            alert("failure");
        }
    });
});