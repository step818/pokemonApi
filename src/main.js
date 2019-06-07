import { Pokedex } from './pokemon.js';
import $ from 'jquery';

$(document).ready(function() {
    $('#goPokemon').click(function() {
      let name = $('#pokemonName').val();
      $('#pokemonName').val("");
  
    console.log(name);
      let pokemon = new Pokedex();  // create instance of WeatherService class
      let promise = pokemon.getPokemon(name);  // call the instance method and pass in user input
    console.log(pokemon);
      promise.then(function(response) {
      let body = JSON.parse(response);
        console.log(body.cards.name);
        $('.showCard').text(`The pokemon ${name} is ${body.cards.name}`);
        //$('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  
  });