//Iteración 1
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let xAccion = [];
let xAnimacion = [];
let xAventura = [];
let xComedia = [];
let xThriller = [];

for (x of movies) {
    if (x.categories.includes("comedia")) {
        xComedia.push(x.title);
    } if (x.categories.includes("aventura")) {
        xAventura.push(x.title);
    } if (x.categories.includes("acción")) {
        xAccion.push(x.title);
    } if (x.categories.includes("thriller")) {
        xThriller.push(x.title);
    } if (x.categories.includes("animación")) {
        xAnimacion.push(x.title);
    }
}

console.log("Títulos de género Acción: " + xAccion);
console.log("Títulos de género Animación: " + xAnimacion);
console.log("Títulos de género Aventura: " + xAventura);
console.log("Títulos de género Comedia: " + xComedia);
console.log("Títulos de género Thriller: " + xThriller);

//Iteración 2
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

var sounds = [];
var xWaves = 0;
var xRain = 0;
var xFirecamp = 0;
var xShower = 0;
var xTrain = 0;
var xWind = 0;
var x = 0;

for (var nombre in users) {
    sounds=[];
    xWaves = 0;
    xRain = 0;
    xFirecamp = 0;
    xShower = 0;
    xTrain = 0;
    xWind = 0;
    x=0;

  let props = users[nombre].favoritesSounds;

    if (props.hasOwnProperty("waves")){
        xWaves = xWaves + props.waves.volume;
        sounds.push(xWaves);
    } if (props.hasOwnProperty("rain")){
        xRain = xRain + props.rain.volume;
        sounds.push(xRain);
    } if (props.hasOwnProperty("firecamp")){
        xFirecamp = xFirecamp + props.firecamp.volume;
        sounds.push(xFirecamp);
    } if (props.hasOwnProperty("shower")){
        xShower = xShower + props.shower.volume;
        sounds.push(xShower);
    } if (props.hasOwnProperty("train")){
        xTrain = xTrain + props.train.volume;
        sounds.push(xTrain);
    } if (props.hasOwnProperty("wind")){
        xWind = xWind + props.wind.volume;
        sounds.push(xWind);
    }

    for (let vol of sounds){
    x = x + vol;
    }
        console.log("La media de volumen de " + users[nombre].name + " es: " + (x/3));
    }


//Iteración 3
const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

var sounds = [];
var xWaves = 0;
var xRain = 0;
var xFirecamp = 0;
var xShower = 0;
var xTrain = 0;
var xWind = 0;
var x = 0;

for (var nombre in users) {

  let props = users[nombre].favoritesSounds;

    if (props.hasOwnProperty("waves")){
        xWaves = xWaves +1;
    } if (props.hasOwnProperty("rain")){
        xRain = xRain + 1;
    } if (props.hasOwnProperty("firecamp")){
        xFirecamp = xFirecamp + 1;
    } if (props.hasOwnProperty("shower")){
        xShower = xShower + 1;
    } if (props.hasOwnProperty("train")){
        xTrain = xTrain + 1;
    } if (props.hasOwnProperty("wind")){
        xWind = xWind + 1;
    }

}

    console.log("El sonido 'waves' ha sido añadido como favorito " + xWaves + " veces.");
    console.log("El sonido 'rain' ha sido añadido como favorito " + xRain + " veces.");
    console.log("El sonido 'shower' ha sido añadido como favorito " + xShower + " veces.");
    console.log("El sonido 'firecamp' ha sido añadido como favorito " + xFirecamp + " veces.");
    console.log("El sonido 'train' ha sido añadido como favorito " + xTrain + " veces.");
    console.log("El sonido 'wind' ha sido añadido como favorito " + xWind + " veces.");


//Iteración 4
const arrayyy = [
    'Caracol', 
    'Mosquito', 
    'Salamandra', 
    'Ajolote'
]

const text1 = "Caracol";
const text2 = "Mosquito";
const text3 = "Salamandra";
const text4 = "Ajolote";

    function findArrayIndex(array, text) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == text) {
                return i;
                break;
            }
        }
    }

    let prueba1 = findArrayIndex(arrayyy, text3);
    console.log(prueba1);

    
    //Iteración 5
    function rollDice(min, max) {
        let aleatorio = Math.floor(Math.random() * max) + min;
        console.log(aleatorio);
    }

    rollDice(1, 6);

