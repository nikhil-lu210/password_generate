/*================================ Part Starts================================*/
$( document ).ready(function() {
    $( '#passGen' ).on( "click", function(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@=";

        for (var i = 0; i <= 7; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        var sendpass = document.getElementById("password_generator");
        sendpass.value = text;
    });


    $( '#copyPass' ).on( "click", function(){
        var copyPass = document.getElementById("password_generator");
        copyPass.select();
        document.execCommand("copy");
    });
});

/*================================ Part Ends==================================*/




/*================================ Part Starts================================*/

/*================================ Part Ends==================================*/




/*================================ Part Starts================================*/

/*================================ Part Ends==================================*/



/*================================ Part Starts================================*/

/*================================ Part Ends==================================*/



/*================================ Part Starts================================*/

/*================================ Part Ends==================================*/



/*================================ Part Starts================================*/

/*================================ Part Ends==================================*/