$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$('.success').remodal().open()
			th.trigger("reset");
		});
		return false;
	});

});