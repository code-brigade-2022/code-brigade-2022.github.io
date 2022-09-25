$(":checkbox").change(function() {
    if(this.checked) {
        $(this).closest('tr').addClass("selected");  
    } else {
        $(this).closest('tr').removeClass("selected");  
    }
});

