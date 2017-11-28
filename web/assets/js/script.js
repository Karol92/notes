var licznik = 1;
$("#task-tag").click(function () {
    $('<div class="task-box" id="box' + licznik + '">' +
        '<input type="checkbox">' +
        '<input type="text" class="form-control">' +
        '<i class="glyphicon glyphicon-trash"></i></div>').appendTo(".container-notes");

    $(":checkbox").on("change", function () {
        var that = this;
        $(this).parent().css("background-color", function () {
            return that.checked ? "#a5d6a7" : "";
        });

    });
    $(".glyphicon-trash").click(function () {
        var id = $(this).parent().attr("id");
        $("#" + id).remove();
    });
    licznik++;
});
$("#question-tag").click(function () {
    $('<div class="question-box" id="box' + licznik + '">' +
        '<input type="checkbox">' +
        '<input type="text" class="form-control">' +
        '<i class="glyphicon glyphicon-trash"></i>' +
        '<div class="asd"></div>' +
        '<div class="asd"></div>' +
        '<div class="asd"></div>' +
        '<div class="asd"></div>' +
        '</div>').appendTo(".container-notes");
    licznik++;
    $(".glyphicon-trash").click(function () {
        var id = $(this).parent().attr("id");
        $("#" + id).remove();
    });
    $(":checkbox").on("change", function () {
        var that = this;
        $(this).parent().css("background-color", function () {
            return that.checked ? "#a5d6a7" : "";
        });

    });
});


$("#question-bool-tag").click(function () {
    $('<div class="question-bool-box accordion" id="box' + licznik + '">' +
        '<input type="checkbox">' +
        '<input type="text" class="form-control">' +
        '<input  name="radio" type="radio">Yes' +
        '<input  name="radio" type="radio">No' +
        '<i class="glyphicon glyphicon-trash" id="delete' + licznik + '"></i></div>').appendTo(".container-notes");
    licznik++;

    $(".glyphicon-trash").click(function () {
        var id = $(this).parent().attr("id");
        $("#" + id).remove();
    });
    $(":checkbox").on("change", function () {
        var that = this;
        $(this).parent().css("background-color", function () {
            return that.checked ? "#a5d6a7" : "";
        });

    });

});











