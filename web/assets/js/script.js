$("#task-tag").click(function () {
    $('<div class="task-box">' +
        '<i class="glyphicon glyphicon-trash"></i></div>').appendTo(".container-notes");
});
$("#question-tag").click(function () {
    $('<div class="question-box">' +
        '<i class="glyphicon glyphicon-trash"></i></div>').appendTo(".container-notes");
});

var licznik = 1;

$("#question-bool-tag").click(function () {
    $('<div class="question-bool-box">' +
        '<input type="checkbox">'+
        '<input type="text" id="form1" class="form-control">'+
        '<input  name="radio" type="radio">Yes' +
        '<input  name="radio" type="radio">No' +
        '<i class="glyphicon glyphicon-trash"></i></div>').appendTo(".container-notes");
    licznik++;

});

$(".glyphicon-trash").click(function () {
    $(".container-notes").children().remove();
    alert("Delete");


});
//
// $("input[type='checkbox']").change(function(){
//     if($(this).is(":checked")){
//         $(this).parent().addClass("redBackground");
//     }else{
//         $(this).parent().removeClass("redBackground");
//     }
// });


