// $(this).addClass("#texte_1", "#texte_3"); Méthode 1 w/ css

// ou encore 

// $("#texte_1").hover(function(){
// $(this).css('border', '5px dashed green');
// });

// $("#texte_3").hover(function(){
//     $(this).css('border', '5px dashed green');
//     });

// ou encore

var border = $('#texte_1').css('border', '5px dashed green')[0].style.border
var border = $('#texte_3').css('border', '5px dashed green')[0].style.border

$(document).ready(function() {
$('.a_cacher').hide();
});