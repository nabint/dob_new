/* Sticky Navbar*/

$ (document).ready(function(){
   
    $('.section-form').waypoint(function(direction){
        if(direction=="down"){
            $("#navbar").addClass("sticky")
        }
        else{
            $('#navbar').removeClass('sticky');
        }  
    })  
});


