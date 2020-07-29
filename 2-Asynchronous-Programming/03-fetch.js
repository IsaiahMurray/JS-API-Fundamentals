fetch('http://example.com/movies.json') //http://example.com/movies.json is the argument, the path of our desired resource
    .then(function(response) {
        return response.json(); //The response object, which will return some JSON
    })
    .then(function(myJson) {
        console.log(myJson) //However, this is only an HTTP response. The json() method is required to extract the JSON
    })