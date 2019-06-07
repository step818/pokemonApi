import { Pokedex } from './pokemon.js';
import $ from 'jquery';

$(document).ready(function() {
    $('#goPokemon').click(function() {
      let name = $('#pokemonName').val();
      $('#pokemonName').val("");
  
    console.log(name);
      let pokemon = new Pokedex();  // create instance of WeatherService class
      let promise = pokemon.getPokemon(name);  // call the instance method and pass in user input
      promise.then(function(response) {
      let body = JSON.parse(response);
        console.log(body.id);
        $('.showCard').text(`The pokemon ${name} is ${body.name}`);
        $('.showTemp').text(`The id of your pokemon is ${body.id}`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  
  });