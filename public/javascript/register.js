$(document).ready(function () {
	$('#submit').click(function() {
	    var data = {
	        username: $('#email').val(),
	        password: $('#password').val()
	    };
	    
	    dpd.users.post(data, function () {                  
	      window.location = 'login.html';
	    });
	    return false;
	})
});
