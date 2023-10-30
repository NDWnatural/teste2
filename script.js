const axios = require('axios');
const apiKey = 'SUA_CHAVE_DE_API_DO_YOUTUBE';

const searchTerm = 'Mr Beast'; // O termo de pesquisa desejado

axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchTerm}&part=snippet`)
    .then(response => {
        // Processar os resultados da pesquisa aqui
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

