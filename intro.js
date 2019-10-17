var imagenes=[
	"000.jpg",
	"001.jpg",
	"002.jpg",
	"003.jpg",
	"004.jpg",
	"005.jpg",
	"006.jpg",
	"007.jpg",
	"008.jpg",
	"009.jpg",
	"010.jpg",
	"011.jpg",
	"012.jpg",
	
]
	
	var personajes=[
	"La risa es la medicina para el dolor más efectiva, y sin efectos secundarios.",
		"Las cosas más bonitas de la vida ocurren cuando no las esperas.",
		"Es mucho más bello amar a tus seres queridos, que odiar a tus enemigos.",
		"Tu sueño nunca se desvanecerá si no le dejas marchar.",
		"El momento perfecto no existe. Bueno, sí, es aquí y ahora, así que no esperes más para hacer eso que tanto deseas.",
		"El amor es hermoso, sobre todo si es correspondido.",
		"Lo más bonito de todo es que no hay nada irrealizable: con trabajo y esfuerzo, puedes convertir cualquier sueño en realidad.",
		"Aprovecha cada pequeño instante de tu vida, amigo, porque con los años esos instantes se vuelven muy grandes.",
		"Úrsula",
		"Si te enamoras y eres correspondido, serás feliz. Si te enamoras y no eres correspondido, serás un filósofo.",
		"No hay mejor remedio para la tristeza que el amor y una sonrisa.",
		"No te rindas, pues a menudo las personas tiran la toalla cuando están muy cerca del éxito.",
		"Tu libertad termina donde empieza la de los demás."];
	
	function elrandom(min, max) {
  		return Math.floor(Math.random() * (max - min) ) + min;
			
	}
	
	function aleatorio(){
	document.getElementById("lanzar").innerHTML= personajes[elrandom(0,personajes.length)];
	document.getElementById("lanzar").style.backgroundImage="url('img/"+imagenes[elrandom(0,imagenes.length)]+"')";
	}
	

	
