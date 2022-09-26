function color_checkbox(){
    if(this.checked) {
        $(this).closest('tr').addClass("selected");  
    } else {
        $(this).closest('tr').removeClass("selected");  
    }
}

$(":checkbox").change(color_checkbox);

$( window ).on( "load", function(){
    $(":checkbox").trigger( "change" );
});