
$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newburger = {
      burger_name: $("#burg").val().trim()
    };

    // POST request.
    //pass in two parameters to make the jQuery ajax request
    //A string containing the URL to which the request is sent.
    //A set of key/value pairs that configure the Ajax request.
    $.ajax("/api/burger/new", {
      type: "POST",
      data: newburger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });



  $(".burgerPUT").on("click", function (event) {
    var id = $(this).data("id");

    var eaten = {
      devoured: 1
    };

    //PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function () {
        console.log("thisburger was eatean", eaten);
        // Reload the page to get the updated list
        location.reload();
      });
  });
});