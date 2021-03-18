//*
// Author: Heidy barrios
// Date: March 16, 2021
// Public Domain
//*


apiEndpoint ="https://xkcd.com/info.0.json"
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: apiEndpoint,
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "2437",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        var testData = JSON.stringigy(data);
        var str = "";
        var imageURL = data.img;
        var title = data.title;
        str += "<h2>" + title + "</h2>";
        str += "<img src='>" + imageURL + "'>";
        document.getElementById('output').innerHTML = str;
      },


    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
