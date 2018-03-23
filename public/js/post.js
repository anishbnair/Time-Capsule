var userID;

$.get("/api/user_data").then(function (data) {
    userID = data.id;
});

$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select


    var decadeInput = $("#decade");
    var topicInput = $("#topic");
    var tagInput = $("#tag");
    var pictureInput = $("#picture");
    var bodyInput = $("#body");
    var userForm = $("#post");
    var userForm = $("#post");

    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
    });

    // Adding an event listener for when the form is submitted
    $(userForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var postId;
    var userId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;


    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();

        // Wont submit the post if we are missing any madatory details
        if (!decadeInput.val().trim() || !topicInput.val().trim() || !tagInput.val().trim() || !bodyInput.val().trim()) {
            return;
        }

        // Constructing a newPost object to hand to the database
        var newPost = {
            decade: decadeInput
                .val()
                .trim(),
            topic: topicInput
                .val()
                .trim(),
            title_tag: tagInput
                .val()
                .trim(),
            user_text: bodyInput
                .val()
                .trim(),
            // user_picture: pictureInput
            //     .val()
            //     .trim(),
            UserId: userID,
        };

        console.log(newPost);

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        }
        else {
            submitPost(newPost);
        }
    }

    // Submits a new post and brings user to blog page upon completion
    function submitPost(post) {
        $.post("/api/posts", post, function () {
            window.location.href = "/decades";
        });
    }

});
