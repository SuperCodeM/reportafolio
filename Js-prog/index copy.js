const typed = new Typed('.typed', 
{
    strings: 
	[
        '<i class="mascota"><span>Hello, My name is Maximino Rentería Moreno|I am 28 years old, I am from Colombia, from the department of Chocó. Passionate about writing lines of code and making cool things that generate solution.</span><br><br><q> Software Developer @2022 <q></i>', 
        '<i class="mascota"><span>Hello, My name is Maximino Rentería Moreno|I am 28 years old, I am from Colombia, from the department of Chocó. Passionate about writing lines of code and making cool things that generate solution.</span><br><br><q> Software Developer @2022 <q></i>', 
        '<i class="mascota"><span>Hello, My name is Maximino Rentería Moreno|I am 28 years old, I am from Colombia, from the department of Chocó. Passionate about writing lines of code and making cool things that generate solution.</span><br><br><q> Software Developer @2022 <q></i>'

	],
  //--------Configuraciones de acción y transición del texto--------------
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 85, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor:true, // Mostrar cursor palpitanto
	cursorChar:'', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato    
});
// let p_frontend = document.getElementById('ima1')
// let p_backend = document.getElementById('ima2')

// let imagen_frontend = document.getElementById('frontend-ima')
// let imagen_backend = document.getElementById('backend-ima')
// //Posición inicial de las imagenes Perfil

// function inicimagen()
// {
//     p_frontend.style.marginLeft='30%'
//     p_backend.style.marginLeft='20%'
//     p_backend.style.width='300px'
//     p_backend.style.height='250px'
//     p_frontend.style.marginTop='-98%'
//     p_backend.style.marginTop='-98%'
// }
// window.onload = function() 
// {
//     inicimagen()
//     imagen_frontend.style.display = 'none'
//     imagen_backend.style.display = 'none'
// }
//  p_frontend.addEventListener('mouseenter', e => 
//  {
//     p_backend.style.filter='opacity(.5)'
//      p_frontend.style.marginLeft = '-30%'
//      imagen_frontend.style.display = 'block'
//      p_backend.style.display='none'
//  }) 
//  p_frontend.addEventListener('mouseleave', e => 
//  {
//     inicimagen()
//     p_backend.style.filter='none'
//     p_backend.style.display='block'
//     imagen_frontend.style.display = 'none'
//  }) 
//  p_backend.addEventListener('mouseenter', e => 
//  {
//     p_frontend.style.display='none'
//      imagen_backend.style.display = 'block'
//      p_backend.style.marginLeft = '-50%' 
//  }) 
//  p_backend.addEventListener('mouseleave', e => 
//  {
//     p_backend.style.marginLeft = '05%' 
//      p_frontend.style.filter='none'
//      /* inicimagen()
//   */    p_frontend.style.display='block'
//      imagen_backend.style.display = 'none'
//  })
const typed1 = new Typed('.typed1', {
	strings: [
		// '<i class="mascota"><span>Calculadora Android</span></i>'
		// '<i class="mascota1"><h1>Selecciona</h1></i>',
		'<i class="mascota1"><a" href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect" src = Img/calculator.png></a></i>',
		'<i class="mascota1"><a href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect" src =Img/counter.png></a></i>',
		'<i class="mascota"><a href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect" src =Img/instagram.png></a></i>',
		'<i class="mascota1"><a" href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect" src = Img/quiz.png></a></i>',
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
let imagen_algoritmo = getElementById('')

function muestraTetodescripción(){
    
}
//evento mouseenter y mouse leave