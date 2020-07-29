let url = 'https://rickandmortyapi.com/api/character/';

let rick = getElementById('rick');
let morty = getElementById('morty');

fetch(url)
.then(function(response){
  return response.json();
})
.then(function(json){
  let chars = json.results;
  console.log(chars);
})