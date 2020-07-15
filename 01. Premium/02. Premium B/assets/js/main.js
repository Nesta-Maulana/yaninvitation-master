function activeInput() {
    if ($('#name-text').val() !== '') 
    {
        $('#name-text').attr("style","border-bottom:2px solid hsla(45, 95%, 41%, 0.984)");
    } 
    else 
    {
        $('#name-text').attr("style","");
        
    }
}