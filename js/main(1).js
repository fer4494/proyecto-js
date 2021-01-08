$(document).ready(function(){
	//Slider
	if(window.location.href.indexOf('index') > -1){
		$(function(){
  			$('.galeria').bxSlider({
    			mode: 'fade',
    			captions: true,
    			slideWidth: 1200,
  			});
		});
	}
	

	//Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Prueba de título',
				date: "Publicado el día:" + moment().format("Do") + "/" + moment().format("MMMM") + "/" + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ullamcorper urna, sit amet aliquam risus. Pellentesque dapibus dictum dictum. Sed tellus ex, iaculis at fermentum eu, dignissim ac felis. Vestibulum ut odio lobortis, convallis leo a, rhoncus nunc. Aliquam pharetra venenatis massa. Phasellus vitae tellus felis. Vivamus sodales diam ipsum, tempor hendrerit mi pulvinar sit amet. Nam posuere tempor erat, ut consectetur augue luctus et. Ut mattis lorem sed elit pellentesque gravida. Nullam quis mollis enim. Nam pharetra dignissim rutrum. Aenean sed aliquam neque. Sed dignissim tellus vel purus pulvinar fringilla.',
			},
			{
				title: 'Prueba de título 2',
				date: "Publicado el día:" + moment().format("Do") + "/" + moment().format("MMMM") + "/" + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ullamcorper urna, sit amet aliquam risus. Pellentesque dapibus dictum dictum. Sed tellus ex, iaculis at fermentum eu, dignissim ac felis. Vestibulum ut odio lobortis, convallis leo a, rhoncus nunc. Aliquam pharetra venenatis massa. Phasellus vitae tellus felis. Vivamus sodales diam ipsum, tempor hendrerit mi pulvinar sit amet. Nam posuere tempor erat, ut consectetur augue luctus et. Ut mattis lorem sed elit pellentesque gravida. Nullam quis mollis enim. Nam pharetra dignissim rutrum. Aenean sed aliquam neque. Sed dignissim tellus vel purus pulvinar fringilla.',
			},
			{
				title: 'Prueba de título 3',
				date: "Publicado el día:" + moment().format("Do") + "/" + moment().format("MMMM") + "/" + moment().format("YYYY"),			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ullamcorper urna, sit amet aliquam risus. Pellentesque dapibus dictum dictum. Sed tellus ex, iaculis at fermentum eu, dignissim ac felis. Vestibulum ut odio lobortis, convallis leo a, rhoncus nunc. Aliquam pharetra venenatis massa. Phasellus vitae tellus felis. Vivamus sodales diam ipsum, tempor hendrerit mi pulvinar sit amet. Nam posuere tempor erat, ut consectetur augue luctus et. Ut mattis lorem sed elit pellentesque gravida. Nullam quis mollis enim. Nam pharetra dignissim rutrum. Aenean sed aliquam neque. Sed dignissim tellus vel purus pulvinar fringilla.',
			},
			{
				title: 'Prueba de título 4',
				date: "Publicado el día:" + moment().format("Do") + "/" + moment().format("MMMM") + "/" + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ullamcorper urna, sit amet aliquam risus. Pellentesque dapibus dictum dictum. Sed tellus ex, iaculis at fermentum eu, dignissim ac felis. Vestibulum ut odio lobortis, convallis leo a, rhoncus nunc. Aliquam pharetra venenatis massa. Phasellus vitae tellus felis. Vivamus sodales diam ipsum, tempor hendrerit mi pulvinar sit amet. Nam posuere tempor erat, ut consectetur augue luctus et. Ut mattis lorem sed elit pellentesque gravida. Nullam quis mollis enim. Nam pharetra dignissim rutrum. Aenean sed aliquam neque. Sed dignissim tellus vel purus pulvinar fringilla.',
			},	
			{
				title: 'Prueba de título 5',
				date: "Publicado el día: " + moment().format("Do") + "/" + moment().format("MMMM") + "/" + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec ullamcorper urna, sit amet aliquam risus. Pellentesque dapibus dictum dictum. Sed tellus ex, iaculis at fermentum eu, dignissim ac felis. Vestibulum ut odio lobortis, convallis leo a, rhoncus nunc. Aliquam pharetra venenatis massa. Phasellus vitae tellus felis. Vivamus sodales diam ipsum, tempor hendrerit mi pulvinar sit amet. Nam posuere tempor erat, ut consectetur augue luctus et. Ut mattis lorem sed elit pellentesque gravida. Nullam quis mollis enim. Nam pharetra dignissim rutrum. Aenean sed aliquam neque. Sed dignissim tellus vel purus pulvinar fringilla.',
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>	

							<a href="#" class="buton-more">Leer más</a>					
					</article> 
			`;
			$("#posts").append(post);
		});
	}

	//Selector de temas
	var theme = $("#theme");
	$("#to_green").click(function(){
		theme.attr("href", "css/green.css");
	});
	$("#to_red").click(function(){
		theme.attr("href", "css/red.css");
	});
	$("#to_blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//Scroll arriba de la web
	var arriba = $(".subir");

	arriba.click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	//Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if (form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		
		about_parrafo.html("<br> <strong> Bienvenido, " + form_name + "</strong>");
		about_parrafo.append("</br> <a href="+ "# id=" + "logout>Cerrar sesión </a>");
		
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	};

	//Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	//Reloj
	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){
			var reloj = moment().format('h:mm:ss a');
			$("#reloj").html(reloj);
		}, 1000);
		
	}


	//Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd/mm/yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}
});