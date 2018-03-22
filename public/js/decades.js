
$(document).ready(function () {

    $(".btn").on('click', function (e) {
        e.preventDefault();

        $(".table>tbody").empty();

        var searchedDecade = this.id;
        console.log("Searched year is " + searchedDecade);

        $.ajax({
            method: "GET",
            url: "/api/decades/" + searchedDecade
        }).then(function (data) {
            console.log(data);
            if (data) {

                for (var i = 0; i < data.length; i++) {

                    var decadesTopic = data[i].topic;
                    var decadesTitle = data[i].title_tag;
                    var decadesContent = data[i].user_text;

                    $(".table>tbody").append(`
                    <tr>
                        <td>${searchedDecade}</td>
                        <td>${decadesTopic}</td>
                        <td>${decadesTitle}</td>
                        <td>${decadesContent}</td>
    
                    </tr>
                    `);
                }
            }
        });
    });

});
