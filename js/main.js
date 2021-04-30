$(document).ready(function () {

    $("#btnJoke").click(function () {

        $.get("https://api.icndb.com/jokes/random", function (getJoke) {
            $("#id").text("Nº " + getJoke.value.id);
            $("#info").text(getJoke.value.joke);
        });

    });

});