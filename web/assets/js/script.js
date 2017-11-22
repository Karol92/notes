window.onload = function () {
    $("#taskTag").click(function () {
        $(".modal").show();

    });

    $(".close").click(function () {
        $(".modal").hide();
    });


    $("#questionTag").click(function () {
        $(".modal").show();

    });

    $(".close").click(function () {
        $(".form-add-question").hide();
    });
    $( function() {
        $( "#sortable1, #sortable2" ).sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    } );

};

