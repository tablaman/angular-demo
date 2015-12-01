// point of contact with Imgur
var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '0d86a54fd6b4616';
const hello = 'hello';

module.exports = window.api = {
    get: function(url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID' + apiKey
            }
        })
        .then (function(response){
            if (response.status !== 200) console.error('Unable to retrieve data from server');
            return response.json();
        });
        // .then (function(data){
        //     console.log(data);
        // });
    }
};
