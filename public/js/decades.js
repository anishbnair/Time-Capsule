$(document).ready(function () {

    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
    });

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
                    var submittedBy = data[i].User.name;
                    var dateAndTime = data[i].createdAt;
                    var formattedDate = new Date(dateAndTime);
                    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");

                    $(".table>tbody").append(`
                    <tr>
                        <td>${searchedDecade}</td>
                        <td>${decadesTopic}</td>
                        <td>${decadesTitle}</td>
                        <td>${decadesContent}</td>
                        <td>${submittedBy}</td>
                        <td>${formattedDate}</td>
    
                    </tr>
                    `);
                }
            }
        });
    });

});
