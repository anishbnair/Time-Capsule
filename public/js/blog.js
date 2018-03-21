$(document).ready(function () {
    /* global moment */

    // blogContainer holds all of our posts
    var blogContainer = $(".blog-container");

    var posts;

    getPosts();

    // This function grabs posts from the database and updates the view

    function getPosts() {

        $.get("/api/posts", function (data) {
            console.log("Posts", data);
            posts = data;

            initializeRows();

        });
    }

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
        blogContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
            postsToAdd.push(createNewRow(posts[i]));
        }
        blogContainer.append(postsToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(post) {
        // var formattedDate = new Date(post.createdAt);
        // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var newPostPanel = $("<div>");
        newPostPanel.addClass("panel panel-default");
        var newPostPanelHeading = $("<div>");
        newPostPanelHeading.addClass("panel-heading");
        // var deleteBtn = $("<button>");
        // deleteBtn.text("x");
        // deleteBtn.addClass("delete btn btn-danger");
        // var editBtn = $("<button>");
        // editBtn.text("EDIT");
        // editBtn.addClass("edit btn btn-info");
        var newPostTitle = $("<h2>");
        // var newPostDate = $("<small>");
        // var newPostAuthor = $("<h5>");
        // newPostAuthor.text("Written by: " + post.Author.name);
        // newPostAuthor.css({
        //     float: "right",
        //     color: "blue",
        //     "margin-top":
        //         "-10px"
        // });
        var newPostPanelBody = $("<div>");
        newPostPanelBody.addClass("panel-body");
        var newPostBody = $("<p>");
        newPostTitle.text(post.decade);
        newPostBody.text(post.user_text);
        // newPostDate.text(formattedDate);
        // newPostTitle.append(newPostDate);
        // newPostPanelHeading.append(deleteBtn);
        // newPostPanelHeading.append(editBtn);
        newPostPanelHeading.append(newPostTitle);
        // newPostPanelHeading.append(newPostAuthor);
        newPostPanelBody.append(newPostBody);
        newPostPanel.append(newPostPanelHeading);
        newPostPanel.append(newPostPanelBody);
        newPostPanel.data("post", post);
        return newPostPanel;
    }

});
