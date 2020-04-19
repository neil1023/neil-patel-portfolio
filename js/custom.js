jQuery(document).ready(function ($) {
  /************** Scroll Navigation *********************/
  $(".navigation").singlePageNav({
    currentClass: "active",
  });

  /************** FlexSlider *********************/
  $(".flexslider").flexslider({
    animation: "fade",
    directionNav: false,
  });

  /************** Responsive Navigation *********************/

  $(".menu-toggle-btn").click(function () {
    $(".responsive-menu").stop(true, true).slideToggle();
  });
});

function handleSubmit() {
  var name = document.getElementById("name-id").value;
  var email = document.getElementById("email-id").value;
  var subject = document.getElementById("subject-id").value;
  var message = document.getElementById("message-id").value;

  fetch(
    "https://9xjimn1zq3.execute-api.us-east-1.amazonaws.com/dev/contact-me/contact",
    {
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Get the snackbar DIV
      var x = document.getElementById("snackbar");

      // Add the "show" class to DIV
      x.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);

      document.getElementById("name-id").value = "";
      document.getElementById("email-id").value = "";
      document.getElementById("subject-id").value = "";
      document.getElementById("message-id").value = "";
    })
    .catch((err) => console.log(err));
}
