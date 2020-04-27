// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    event.preventDefault();
    console.log("changed state");
    
    let id = $(this).data("id");
    let newDevoured = reverseBoolean($(this).data("newdevour"));

    console.log(newDevoured);
    let newDevourState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger").val().trim(),
    };

    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
  
function reverseBoolean(boolean) {
  if (boolean == true) {
    return false;
  } else {
    return true;
  }
}