$(document).ready(function () {
    var licznik = 1;
    var add = 1;
    $("#task-tag").click(function () {
        $('<div class="task-box" id="box' + licznik + '">' +
            '<input type="checkbox">' +
            '<input type="text" class="title" placeholder="Title:">' +
            '<i class="glyphicon glyphicon-trash"></i>' +
            '<i class="glyphicon glyphicon-share-alt"></i></div>').appendTo(".container-notes");

        $(".glyphicon-share-alt").click(function () {
            var id2 = $(this).parent().attr("id");
            $('<input type="text" class="responses" id="response ' + add + '">').appendTo('.task-box');
            add++;
        });

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
    $("#question-tag").click(function () {/////////////dodawnie diva pytanie
        $('<div class="question-box" id="box' + licznik + '">' +
            '<input type="checkbox">' +
            '<input type="text" class="title" placeholder="Title:">' +
            '<i class="glyphicon glyphicon-trash"></i>' +
            '<i class="glyphicon glyphicon-arrow-down"></i>' +
            '</div>').appendTo(".container-notes");


        $(".glyphicon-arrow-down").click(function () {
            $('<input type="text" class="responses" id="response' + add + '">').appendTo(".question-box");
            add++;
        });


        $(".glyphicon-trash").click(function () {/////////usuwanie diva
            var id = $(this).parent().attr("id");
            $("#" + id).remove();
        });
        $(":checkbox").on("change", function () {/////////po zaznaczeniu checkboxa zmiana koloru diva
            var that = this;
            $(this).parent().css("background-color", function () {
                return that.checked ? "#a5d6a7" : "";
            });

        });
    });


    $("#question-bool-tag").click(function () {
        $('<div class="question-bool-box" id="box' + licznik + '">' +
            '<input type="checkbox">' +
            '<input type="text" class="title"placeholder="Title:">' +
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
});













