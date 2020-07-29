let starWarsPeopleList = document.querySelector('ul'); //The list that will hold the 'p0eople' from the API

fetch('https://swapi.dev/api/people') //Fetch request(GET)
.then(function(response) {   
  return response.json(); //The response return from our request 
})
.then(function(json) {
  let people = json.results; //Turning the list of people into JSON

  for(p of people) { //Looping through the list of people
    let listItem = document.createElement('li'); //Creating list item tags in the html
    listItem.innerHTML = '<p>' + p.name + '</p>'; //setting the list item html as a <p> tag that will hold the name of the people in the list
    starWarsPeopleList.appendChild(listItem);  //Nesting the list items inside of the previously made list
  }

});