// Substitua 'SUA_CHAVE_DE_API_DO_YOUTUBE' pela sua chave de API real
const apiKey = 'AIzaSyAiw_Ano92YzywXpv_pPPWHNF8txNpOGsk';
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';

const searchQuery = 'Mr Beast'; // Substitua pelo termo de pesquisa desejado

axios.get(apiUrl, {
    params: {
        key: apiKey,
        q: searchQuery,
        part: 'snippet',
        maxResults: 10, // Quantidade de resultados desejada
        type: 'video',  // Apenas vídeos
    }
})
.then(response => {
    const results = response.data.items;
    const resultsContainer = document.getElementById('results');

    if (results.length === 0) {
        resultsContainer.innerHTML = 'Nenhum vídeo encontrado.';
    } else {
        const videoList = results.map(video => {
            const title = video.snippet.title;
            const description = video.snippet.description;
            const videoId = video.id.videoId;

            return `
                <div>
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        });

        resultsContainer.innerHTML = videoList.join('');
    }
})
.catch(error => {
    console.error('Erro na solicitação:', error);
});
