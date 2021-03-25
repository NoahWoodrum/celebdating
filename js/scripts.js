$(document).ready(function () {
  $("#celebrityForm").submit(function(event) {
    event.preventDefault(); 
    const question1 = $("input#question1").val();
    const question2 = $("input#question2").val();

    
    if (question1 === "country" && question2 ==="no") {
 
      $('#shrek').show();
    }
    else if (question1 === "city" && question2 ==="yes") {
 
      $("#po").show();
    }
    else if (question1 === "city" && question2 ==="no") {
 
      $("#megamind").show();
    }
    else if (question1 === "country" && question2 ==="yes") {
 
      $("#donkey").show();
    }
    else {
      
$("#nonsense").show();

 
    }

  });
});