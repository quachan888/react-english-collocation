const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
    params: { lang: 'en', query: 'advice', max_results: '25' },
    headers: {
        'X-RapidAPI-Host': 'linguatools-english-collocations.p.rapidapi.com',
        'X-RapidAPI-Key': 'a020fb9f8bmsh943fd79c02261bcp1c673cjsnd6f8a3512ad5'
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
