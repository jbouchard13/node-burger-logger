// create event listeners for devour and submit buttons

$(".devour-btn").on("click", (e) => {
  e.preventDefault();
  alert("clicked");
});

$(".submit-btn").on("click", (e) => {
  // prevent the page from defaulting so the data stays through the put request
  e.preventDefault();
  // get the data value from the text field
  const newBurger = {
    // set the burger_name to the data entered
    burger_name: $("#addBurger").val(),
  };
  // call an ajax put request to /api/burgers
  $.ajax("/api/burgers", {
    // send the new burger data to the back end to be added to the db
    type: "POST",
    data: newBurger,
  })
    .then((result) => {
      // reload the page to display the added burger to the user
      location.reload();
    })
    .catch((err) => {
      // alert the user if no burger data is typed
      // use the response message from the back end for the alert
      alert(err.responseJSON.errorMsg);
    });
});
