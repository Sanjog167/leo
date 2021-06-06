$("#submit").click(function(){


var name = $("#firstName").val();
var email = $("#email").val();
var company = $("#compname").val();
var phone = $("#phone").val();
var message = $("#subject").val();


if(name == '' || email== '' || company=='' || phone == '' || message == ''){
    swal({
        title: "Fields Empty!",
        text: "Please check the missing fields!",
        icon: "warning",
      });
    }

    else{
        $(".modal").addClass('hide');
        swal({
            title: "That’s great!",
            text: "Thank you for the information. Welcome aboard, we will be right there with you in a moment!",
            icon: "success",
          });
          $("#firstName").val('');
          $("#email").val('');
          $("#compname").val('');
          $("#phone").val('');
          $("#subject").val('');
    }


})