$( document ).ready(function() {
    console.log( "ready!" );
    $(".aside-menu-button").click(function functionName() {
        $(".book-titles-wrapper").toggleClass("opened");
        $(this).toggleClass("opened");
    })
});
