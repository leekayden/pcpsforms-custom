function switchQuote() {
  //Show loading spinner
  $("#loadingSpinner").show();

  //Fetch new quote
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    data: { format: "jsonp" },
    error: function () {
      console.log("An error has occurred");
    },
    dataType: "jsonp",
    success: function (data) {
      let quote = data.quoteText;
      let author = data.quoteAuthor === "" ? "Unknown" : data.quoteAuthor;

      //Slide animation
      $("#content").slideUp(500, function () {
        $("#text").html(``);
        $("#author").html(``);
      });
      $("#content").fadeOut(500, function () {
        $("#text").html(`${quote}`);
        $("#author").html(`${author}`);
      });

      $("#content").slideDown(500, function () {
        //Hide loading spinner after content finished sliding down
        $("#loadingSpinner").hide();
      });
      $("#content").fadeIn(100);
    },
    type: "GET",
  });
}

$(document).ready(function () {
  //Enable button tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Initally hide the loading spinner
  $("#loadingSpinner").hide();

  //First Load
  switchQuote();

  //Trigger fetch of new quote
  $("#new-quote").click(switchQuote);
});

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good evening";
else
  console.error(
    "There was a critical error with the clock of your machine! The program wasn't able to detect the time!"
  );

document.getElementById("greet").innerHTML =
  greet + " and welcome to PCPSForms!";

console.clear();

$(document).on({
    "contextmenu": function (e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});

$(document).on("contextmenu",function(e){

    if(e.button == 2) {
        e.preventDefault();
            console.warn('Right-clicking has been disabled!');
    }
return true;
});