function updateQuoteSection(quote, author) {
    document.getElementById('quote-text').innerHTML = '"' + quote;
    document.getElementById('quote-author').innerHTML = author + '"';
}

// Remember XHMLHTTP requests are asynchronous!!
function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    //xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
	            var res = xhr.responseText;
	            // Executes your callback with the
	            // response already parsed into JSON
                callback(JSON.parse(res));
            } else { // Server responded with some error
                console.error(xhr.statusText);
                updateQuoteSection('Could not load quote, sorry.', '- mattkeegan.uk');
            } // End of verifying response status
        } // Please read: http://www.w3schools.com/ajax/...
          // .../ajax_xmlhttprequest_onreadystatechange.asp
    }; // End of what to do when the response is answered
    
    // What to do if there's an error with the request
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
      updateQuoteSection('Could not load quote, sorry.', '- mattkeegan.uk');
    }; // End of error handling
    
    // Send the request to the server
    xhr.send(null);
} // End of getJSON function

//================================================//
//        EXAMPLE OF USE WITH GITHUB API          //
//================================================//
var apiURL = "https://quotes.rest/qod.json";

getJSON(apiURL, function(quoteData) {
    var quote = quoteData.contents.quotes[0];
    var quoteAuthor = quote.author;
    var quoteText = quote.quote;
    updateQuoteSection(quoteText, quoteAuthor);
}); // End of request
