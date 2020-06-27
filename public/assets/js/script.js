// create event listeners for devour and submit buttons

$(".devour-btn").on("click", (e) => {
  // get clicked button's data-id
  const id = e.target.dataset.id;

  // console.log(id);

  // create an object to set the devoured value to true
  const devouredSet = {
    // set the devoured value to 1 to set it to true in the db
    devoured: 1,
  };

  // call ajax put request with the id put into the request url
  $.ajax({
    method: "PUT",
    url: `/api/burgers/${id}`,
    data: devouredSet,
  })
    .then((result) => {
      console.log(result);
      location.reload();
    })
    .catch((err) => {
      alert("An error occured");
    });
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
