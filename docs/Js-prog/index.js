//Animación del texto de presentación inicial
const typed = new Typed('.typed', 
{
    strings: 
	[
        '<i class="mascota"><span>Hello, My name is Maximino Rentería Moreno|I am 28 years old, I am from Colombia, from the department of Chocó. Passionate about writing lines of code and making cool things that generate solution.</span><br><br><q> Software Developer @2022 <q></i>', 
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
//Animación de imagenes de proyectos
const typed1 = new Typed('.typed1', {
	strings: [
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
//Animación de imagenes de Galeria Max
const typed2 = new Typed('.typed2', {
	strings: [
		'<i class="mascota1"><a" href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect1" src = Img/1.jpeg></a></i>'+
		'<i class="mascota1"><a href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect1" src =Img/code-js.png></a></i>',

		'<i class="mascota1"><a href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect1" src =Img/m.jpeg></a></i>'+
		'<i class="mascota1"><a" href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect1" src = Img/code-go.png></a></i>',

		'<i class="mascota1"><a" href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect1" src = Img/m1.jpeg></a></i>'+
		'<i class="mascota1"><a" href="https://github.com/SuperCodeOficial/Calculadora_Android" target="_blank"><img class="sizeImgProyect1" src = Img/code_rn.png></a></i>',
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 500, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 3000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


const algoritmo = document.getElementById('algoritmo')
const database = document.getElementById('db')
const csharp = document.getElementById('c#')
const java = document.getElementById('java')
const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const react = document.getElementById('react')
const github = document.getElementById('github')
const php = document.getElementById('php')
const python = document.getElementById('python')
const react_native = document.getElementById('react-native')
const go = document.getElementById('go')
const ts = document.getElementById('ts')

const textoHover = document.getElementById('texto_hover')
algoritmo.addEventListener('mouseenter', e => 
 {
     texto_hover.innerHTML= '¡Algoritmos!';
 })
 algoritmo.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 database.addEventListener('mouseenter', e => 
 {
     texto_hover.innerHTML= '¡Bases de Datos!';
 })
 database.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 csharp.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡Visual C#!';
 })
 database.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 java.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡JAVA SE!';
 })
 java.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 html.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡HTML!';
 })
 html.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 css.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡CSS!';
 })
 css.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 js.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡Javascript!';
 })
 js.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 react.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡React JS!';
 })
 react.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 github.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡Git & GitHub!';
 })
 github.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 php.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡PHP!';
 })
 php.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 python.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡Python!';
 })
 python.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 react_native.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡React-Native!';
 })
 react_native.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })
 
 go.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡Golang!';
 })
 go.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })

 ts.addEventListener('mouseenter', e => 
 {
	texto_hover.innerHTML= '¡Typescript!';
 })
 ts.addEventListener('mouseleave', e => 
 {
	texto_hover.innerHTML= '';
 })
//evento mouseenter y mouse leave