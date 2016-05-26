$(document).ready(function() {
    var toHide = ["Class Planner", "Enrolled Classes", "Wait Listed Classes"];

    for( var i = 0; i < toHide.length; i++ ) {
        $('*:contains("'+ toHide[i] +'")').last().parent().hide();
        console.log("Hiding...");
    }
});
