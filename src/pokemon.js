export class Pokedex {
    getPokemon(name) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
  }