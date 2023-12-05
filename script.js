document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'AIzaSyCC_vc69IgH6SYGi2aM181b-uUDRaitWzE'; // Substitua pela sua chave de API real
    const apiUrl = 'https://www.googleapis.com/youtube/v3/search';

    const resultsContainer = document.getElementById('results');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value;
        
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
        });
    });
});
//segundo java//

    var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var content          = document.getElementById('content');
    var showSidebar      = false;

    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });
